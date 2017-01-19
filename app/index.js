import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, Text } from 'react-native';
import { Router, Scene, TabBar } from 'react-native-router-flux';

import AccountDisplay from './routes/AccountDisplay';
import Authentication from './routes/Authentication';
import EventDetailContainer from './routes/EventDetail';
import EventsListContainer from './routes/EventsList';
import NewsContainer from './routes/News';
import FarmDetailContainer from './routes/FarmDetail';
import FarmsList from './routes/FarmsList';
import ProductsListContainer from './routes/ProductsList';

import settings from './config/settings';
import styles from './styles.js';

class App extends Component {

	constructor(){
		super();
		this.state = {
			hasToken: false,
			isLoaded: false
		}
	}

	componentWillMount() {
		AsyncStorage.getItem(settings.keys.ID_TOKEN).then((token) => {
			if (token !== null){
				this.setState({
					hasToken: true,
					isLoaded: true
				});
			} else {
				this.setState({
					hasToken: false,
					isLoaded: true
			});
		}
		});
	}

	render() {
		if (!this.state.isLoaded){
			// TODO: align the loader at the center of the screen.
			return (
				<ActivityIndicator />
			)
		} else {
			return (
				<Router>
					<Scene key="root">
						<Scene
							component={Authentication}
							hideNavBar={true}
							initial={!this.state.hasToken}
							key="Authentication"
							title="Authentication"
							/>

						<Scene
							direction="vertical"
							hideNavBar={true}
							initial={this.state.hasToken}
							key="MainTab"
							tabBarStyle={styles.tabBar}
							tabs={true}
							>

							<Scene
								component={NewsContainer}
								icon={() => {return (<Text>Actualités</Text>)}}
								initial={true}
								key="News"
								title="Actualités"
								/>

							<Scene
								component={EventsListContainer}
								icon={() => {return (<Text>Events</Text>)}}
								key="EventsList"
								title="Mes abonnements"
								/>

							<Scene
								component={ProductsListContainer}
								icon={() => {return (<Text>Produits</Text>)}}
								key="ProductsList"
								title="Les produits du plateau"
								/>

							<Scene
								component={FarmsList}
								icon={() => {return (<Text>Fermes</Text>)}}
								key="FarmsList"
								title="Les fermes du plateau"
								/>

							<Scene
								component={AccountDisplay}
								icon={() => {return (<Text>Profile</Text>)}}
								key="AccountDisplay"
								title="Mon compte"
								/>

						</Scene>

						<Scene
							component={EventDetailContainer}
							hideNavBar={false}
							key="EventDetailContainer"
							title="Détails de l'évènement"
							/>

						<Scene
							component={FarmDetailContainer}
							hideNavBar={false}
							key="FarmDetailContainer"
							title="Détails de la ferme"
							/>
					</Scene>
				</Router>
			)
		}
	}
}

export default App;

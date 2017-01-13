import React, {Component} from 'react';
import {ActivityIndicator, AsyncStorage, Image} from 'react-native';
import {Router, Scene, TabBar} from 'react-native-router-flux';

import AccountDisplay from './routes/AccountDisplay';
import Authentication from './routes/Authentication';
import EventDetailContainer from './routes/EventDetail';
import EventsList from './routes/EventsList';
import FarmDetailContainer from './routes/FarmDetail';
import FarmsList from './routes/FarmsList';

import settings from './config/settings'
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
								component={AccountDisplay}
								icon={() => {return (<Image source={require('./images/user.png')} />)}}
								key="AccountDisplay"
								title="Mon compte"
								/>

							<Scene
								component={EventsList}
								icon={() => {return (<Image source={require('./images/farm.png')} />)}}
								initial={true}
								key="EventsList"
								title="Mon flux"
								/>

							<Scene
								component={FarmsList}
								icon={() => {return (<Image source={require('./images/farm.png')} />)}}
								key="FarmsList"
								title="Les fermes du plateau"
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

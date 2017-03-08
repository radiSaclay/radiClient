import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene, TabBar } from 'react-native-router-flux';
import { connect } from 'react-redux'

import AccountDisplay from '../routes/AccountDisplay';
import Authentication from '../routes/Authentication';
import EventDetailContainer from '../routes/EventDetail';
import EventsListRoute from '../routes/EventsList';
import NewsRoute from '../routes/News';
import FarmDetailContainer from '../routes/FarmDetail';
import FarmsListRoute from '../routes/FarmsList';
import ProductDetailContainer from '../routes/ProductDetail';
import ProductsListRoute from '../routes/ProductsList';

import Loader from '../components/Loader';
import settings from '../config/settings';
import styles from './styles.js';

class App extends Component {
	render() {
		if (!this.props.isMounted){
			// TODO: Replace this loader by a welcome screen
			return <Loader />
		} else {
			return (
				<Router>
					<Scene key="root">
						<Scene
							component={Authentication}
							hideNavBar={true}
							initial={!this.props.idToken}
							key="Authentication"
							title="Authentication"
							/>

						<Scene
							direction="vertical"
							hideNavBar={true}
							initial={this.props.idToken}
							key="MainTab"
							tabBarStyle={styles.tabBar}
							tabs={true}
							>

							<Scene
								component={NewsRoute}
								hideNavBar={true}
								icon={() => {return (<Text>Actualités</Text>)}}
								initial={true}
								key="News"
								title="Actualités"
								/>

							<Scene
								component={EventsListRoute}
								hideNavBar={true}
								icon={() => {return (<Text>Events</Text>)}}
								key="EventsList"
								title="Abonnements"
								/>

							<Scene
								component={ProductsListRoute}
								hideNavBar={true}
								icon={() => {return (<Text>Produits</Text>)}}
								key="ProductsList"
								title="Les produits du plateau"
								/>

							<Scene
								component={FarmsListRoute}
								hideNavBar={true}
								icon={() => {return (<Text>Fermes</Text>)}}
								key="FarmsList"
								title="Les fermes du plateau"
								/>

							<Scene
								component={AccountDisplay}
								hideNavBar={true}
								icon={() => {return (<Text>Profile</Text>)}}
								key="AccountDisplay"
								title="Mon compte"
								/>

						</Scene>

						<Scene
							component={EventDetailContainer}
							hideNavBar={true}
							key="EventDetailContainer"
							title="Détails de l'évènement"
							/>

						<Scene
							component={FarmDetailContainer}
							hideNavBar={true}
							key="FarmDetailContainer"
							title="Détails de la ferme"
							/>

						<Scene
							component={ProductDetailContainer}
							hideNavBar={true}
							key="ProductDetailContainer"
							title="Détails du produit"
							/>
					</Scene>
				</Router>
			)
		}
	}
}

const mapStateToProps = (store) => {
	return {
		idToken: store.user.idToken,
		isMounted: store.user.isMounted,
	}
}

export default connect(mapStateToProps)(App);

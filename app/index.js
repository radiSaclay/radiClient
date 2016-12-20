import React from 'react';
import { Image } from 'react-native';
import { Router, Scene, TabBar } from 'react-native-router-flux';

import SignIn from './routes/SignIn';
import EventsList from './components/EventsList';
import AccountDisplay from './components/AccountDisplay';

import styles from './styles.js';

const App = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene initial={true} component={SignIn} hideNavBar={true} key="SignIn" title="Sign In" />

				<Scene key="MainTab" tabs={true} hideNavBar={true} tabBarStyle={styles.tabBar} direction="vertical">
					<Scene component={AccountDisplay} key="AccountDisplay" title="Mon compte" icon={() => {return (<Image source={require('./images/user.png')} />)}} />
					<Scene initial={true} component={EventsList} key="EventsList" title="Mon flux" icon={() => {return (<Image source={require('./images/farm.png')} />)}} />
				</Scene>
			</Scene>
		</Router>
	)
}

export default App;

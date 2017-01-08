import React from 'react';
import { Image } from 'react-native';
import {
	Router,
	Scene,
	TabBar,
} from 'react-native-router-flux';

import SignIn from './routes/SignIn';
import EventDetail from './routes/EventDetail';
import EventsList from './routes/EventsList';
import AccountDisplay from './routes/AccountDisplay';

import styles from './styles.js';

const App = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene
					component={SignIn}
					hideNavBar={true}
					initial={true}
					key="SignIn"
					title="Sign In"
					/>

				<Scene
					key="MainTab"
					tabs={true}
					hideNavBar={true}
					tabBarStyle={styles.tabBar}
					direction="vertical"
					>
					<Scene
						component={AccountDisplay}
						key="AccountDisplay"
						title="Mon compte"
						icon={() => {return (<Image source={require('./images/user.png')} />)}}
						/>

					<Scene
						component={EventsList}
						initial={true}
						key="EventsList"
						title="Mon flux"
						icon={() => {return (<Image source={require('./images/farm.png')} />)}}
						/>
				</Scene>

				<Scene
					component={EventDetail}
					hideNavBar={false}
					key="EventDetail"
					title="Détails de l'évènement"
					/>
			</Scene>
		</Router>
	)
}

export default App;

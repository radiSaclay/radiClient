import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import SignIn from './routes/SignIn';
import EventDetail from './routes/EventDetail';
import EventsList from './routes/EventsList';

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
					component={EventsList}
					hideNavBar={false}
					key="EventsList"
					title="Events List"
				/>
				
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

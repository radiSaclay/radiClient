import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import SignIn from './routes/SignIn';
import EventsList from './routes/EventsList';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          component={SignIn}
          initial={true}
          hideNavBar={true}
          key="SignIn"
          title="Sign In"
        />
        <Scene
          component={EventsList}
          hideNavBar={false}
          key="EventsList"
          title="Events List"
        />
      </Scene>
    </Router>
  )
}

export default App;

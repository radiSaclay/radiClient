import React, {Component} from 'react';
import {ActivityIndicator, AsyncStorage, Image} from 'react-native';
import {Router, Scene, TabBar} from 'react-native-router-flux';

import SignIn from './routes/SignIn';
import EventDetail from './routes/EventDetail';
import EventsList from './routes/EventsList';
import AccountDisplay from './routes/AccountDisplay';

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
			console.log(token);
			if (token !== null){
        this.setState({
          hasToken: true,
          isLoaded: true
        });
      } else{
        this.setState({
          hasToken: false,
          isLoaded: true
        });
      }
    });
  }

	render() {
		console.log(this.state.isLoaded);
		if (!this.state.isLoaded){
      return (
        <ActivityIndicator />
      )
    } else {
      return (
        <Router>
          <Scene key="root">
            <Scene
              component={SignIn}
              hideNavBar={true}
              initial={!this.state.hasToken}
              key="SignIn"
              title="Sign In"
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
  }


}

export default App;

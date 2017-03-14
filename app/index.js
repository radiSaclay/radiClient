import React, {Component} from 'react'
import { Provider } from 'react-redux'
import OneSignal from 'react-native-onesignal';

import configureStore from './configureStore'
import App from './App'

class Root extends Component{

	componentDidMount() {
		OneSignal.configure({});
	}

	render() {
		return(
			<Provider store={configureStore()}>
				<App />
			</Provider>
		)
	}
}

export default Root;

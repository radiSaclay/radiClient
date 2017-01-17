import React, { Component } from 'react'
import {
	ActivityIndicator,
	AsyncStorage,
	ListView,
	View,
} from 'react-native'
import {Actions, ActionConst} from 'react-native-router-flux'

import apiUtils from '../../config/apiUtils.js'
import settings from '../../config/settings'

import styles from './styles'

import FarmContainer from '../../components/Farm'

class FarmsList extends Component {
	constructor() {
		super();
		this.state = {
			dataSource: null,
			isLoaded: false,
		}
	}

	componentWillMount() {
		this.getFarmsList()
	}


	async userLogout() {
    try {
      await AsyncStorage.removeItem(settings.keys.ID_TOKEN);
      Actions.Authentication({type: ActionConst.REPLACE});
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
	/*
		Gets the list of the farms around the user.
	*/
	// TODO: load less information about farms
	getFarmsList() {
		AsyncStorage.getItem(settings.keys.ID_TOKEN).then((idToken) => {
			return fetch(settings.urls.FARMS_URL, {
				method: "GET",
				headers: {
					'Authorization': idToken
				}
			})
			.then(apiUtils.checkStatus)
			.then((response) => response.json())
			.then((responseJson) => {
				const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
				this.setState({
					dataSource: ds.cloneWithRows(responseJson),
					isLoaded: true,
				})
			})
			.catch((error) => {
				console.log(error)
				this.userLogout();
			})
		})
	}

	renderRow(rowData) {
		return (
			<FarmContainer
				address={rowData.address}
				id={rowData.id}
				name={rowData.name}
				/>
		)
	}

	render() {
		if (!this.state.isLoaded) {
			return (
				<ActivityIndicator />
			)
		} else {
			return (
				<View style = {styles.container}>
					<ListView
						dataSource={this.state.dataSource}
						renderRow={this.renderRow}
						renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
						/>
				</View>
			)
		}
	}
}

export default FarmsList;

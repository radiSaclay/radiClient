import React, { Component } from 'react'
import {
	ActivityIndicator,
	ListView,
	View,
} from 'react-native'

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

	/*
		Gets the list of the farms around the user.
	*/
	// TODO: load less information about farms 
	getFarmsList() {
		return fetch(settings.urls.FARMS_URL)
		.then((response) => response.json())
		.then((responseJson) => {
			const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
			this.setState({
				dataSource: ds.cloneWithRows(responseJson),
				isLoaded: true,
			})
		})
		.catch((error) => {
			console.error(error)
		})
	}

	renderRow(rowData) {
		return (
			<FarmContainer
				id={rowData.id}
				name={rowData.name}
				ownerId={rowData.ownerId}
				address={rowData.address}
				website={rowData.website}
				phone={rowData.phone}
				email={rowData.email}
				/>
		)
	}

	render(rowData) {
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

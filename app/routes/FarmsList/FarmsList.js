import React, { Component } from 'react'
import { ListView, RefreshControl, View } from 'react-native'

import styles from './styles'

import Farm from '../../components/Farm'

class FarmsList extends Component {

	renderRow(rowData) {
		return (
			<Farm
				address={rowData.address}
				id={rowData.id}
				name={rowData.name}
				/>
		)
	}

	render() {
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
		var dataSource = ds.cloneWithRows(this.props.farmsList)
		return (
			<View style = {styles.container}>
				<ListView
					dataSource={dataSource}
					renderRow={this.renderRow}
					renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
					refreshControl={
						<RefreshControl
							refreshing={this.props.isLoading}
							onRefresh={this.props.onRefresh}
						/>
					}
				/>
			</View>
		)
	}
}

FarmsList.propTypes = {
	// from parent
	farmsList: React.PropTypes.array.isRequired,
	isLoading: React.PropTypes.bool.isRequired,
	onRefresh: React.PropTypes.func.isRequired
}

export default FarmsList;

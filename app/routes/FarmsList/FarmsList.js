import React, { Component } from 'react'
import { ListView, View } from 'react-native'

import styles from './styles'

import FarmContainer from '../../components/Farm'

class FarmsList extends Component {

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
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
		var dataSource = ds.cloneWithRows(this.props.farmsList)
		return (
			<View style = {styles.container}>
				<ListView
					dataSource={dataSource}
					renderRow={this.renderRow}
					renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
					/>
			</View>
		)
	}
}

FarmsList.propTypes = {
	// from parent
	farmsList: React.PropTypes.array,
}

export default FarmsList;

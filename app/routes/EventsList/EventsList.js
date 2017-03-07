import React, { Component } from 'react';
import { ListView, View } from 'react-native';

import styles from './styles';

import Event from '../../components/Event';

class EventsList extends Component {

	renderRow(rowData) {
		return (
			<Event
				description={rowData.description}
				endDate={rowData.endAt}
				eventId={rowData.id}
				farmName={rowData.farm.name}
				title={rowData.title}
				/>
		)
	}

	render() {
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
		var dataSource = ds.cloneWithRows(this.props.eventsList)
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

EventsList.propTypes = {
	// from parent
	eventsList: React.PropTypes.array,
}

export default EventsList;

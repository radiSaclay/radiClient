import React, { Component } from 'react';
import { ListView, View } from 'react-native';

import styles from './styles';

import EventContainer from '../../components/Event';

class EventsList extends Component {

	// TODO: the route doesn't return the producer name for the moment. Update the producer prop once the route is updated
	renderRow(rowData) {
		return (
			<EventContainer
				endDate={rowData.endAt}
				eventId={rowData.id}
				producer={rowData.producer}
				product={rowData.description}
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
	eventsList: React.PropTypes.array,
}

export default EventsList;

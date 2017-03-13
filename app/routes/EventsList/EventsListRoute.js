import React, { Component } from 'react';
import { View } from 'react-native';

import settings from '../../config/settings';
import styles from './styles';

import EventsListContainer from './EventsListContainer';
import Frame from '../../components/Frame';

class EventsListRoute extends Component {
	render() {
		return (
			<Frame title={this.props.title}>
				<View style={styles.route}>
					<EventsListContainer/>
				</View>
			</Frame>
		)
	}
}

export default EventsListRoute;

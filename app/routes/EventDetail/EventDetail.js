import React, {Component} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

class EventDetail extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.description}>
					{this.props.description}
				</Text>

				<Text style={styles.farmId}>
					{this.props.farmId}
				</Text>

				<Text style={styles.endDate}>
					{this.props.endAt}
				</Text>
			</View>
		)
	}
}

EventDetail.propTypes = {
	description: React.PropTypes.string,
	endAt: React.PropTypes.string,
	farmId: React.PropTypes.number
};

export default EventDetail;

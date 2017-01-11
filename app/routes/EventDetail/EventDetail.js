import React, { Component } from 'react';
import {
	Text,
	View,
} from 'react-native';

import styles from './styles';

class EventDetail extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.product}>
					{this.props.product}
				</Text>

				<Text style={styles.producer}>
					{this.props.producer}
				</Text>

				<Text style={styles.daysLeft}>
					{this.props.daysLeft}
				</Text>
			</View>
		)
	}
}

// TODO: add constraints about the props type

export default EventDetail;

import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

const EventDetail = (props) => {
	return(
		<View style={styles.container}>
			<Text style={styles.description}>
				{props.description}
			</Text>

			<Text style={styles.farmId}>
				{props.farmId}
			</Text>

			<Text style={styles.endDate}>
				{props.endAt}
			</Text>
		</View>
	)
}

export default EventDetail;

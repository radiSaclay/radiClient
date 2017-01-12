import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

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
			
			<TouchableOpacity
				onPress={props.togglePinStatus}
				style={styles.buttonWrapper}
				>
				<Text style={styles.buttonText}>
					{props.isPinned ? 'Dépingler' : 'Épingler'}
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default EventDetail;

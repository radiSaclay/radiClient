import React from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import styles from './styles';

/*	Event receiving props:
	- endDate : string
	- getEventDetail: function
	- producer : string
	- title : string
*/
const Event = (props) => {
	return (
		<TouchableOpacity onPress={props.getEventDetail}>
			<View style={styles.mainContainer}>
				<View style={styles.imageContainer}>
					<Image
						source={require('../../images/icons/radish.png')}
					/>
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.title}>
						{props.title}
					</Text>

					<View style={styles.subtitle}>
						<Text style={styles.producer}>
							{props.producer}
						</Text>

						<Text style={styles.endDate}>
							{props.endDate}
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

export default Event;

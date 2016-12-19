import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

import styles from './styles';

/*
	Props:
	- product: id of the product
	- producer: id of the producer
	- daysLeft: number of days left before the event ends
*/

class Event extends Component {
	render() {
		return (
			// Main container
			<View style={styles.mainContainer}>
				// Image container
				<View style={styles.imageContainer}>
					<Image
						source={require('../../images/icons/radish.png')}
					/>
				</View>

				// Text container
				<View style={styles.textContainer}>
					<Text style={styles.product}>
						{this.props.product}
					</Text>

					<View style={styles.subtitle}>
						<Text style={styles.producer}>
							{this.props.producer}
						</Text>

						<Text style={styles.daysLeft}>
							{this.props.daysLeft}
						</Text>
					</View>
				</View>
			</View>
		);
	}
}

export default Event;

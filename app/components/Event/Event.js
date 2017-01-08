import React, { Component } from 'react';
import {
	Image,
	Text,
	TouchableHighlight,
	View
} from 'react-native';
import { Actions } from 'react-native-router-flux';


import styles from './styles';

/*
	Props:
	- product: name of the product
	- producer: name of the producer
	- daysLeft: number of days left before the event ends
*/

class Event extends Component {
	render() {
		return (
			<TouchableHighlight onPress={() => Actions.EventDetail(this.props)}>
				<View style={styles.mainContainer}>
					<View style={styles.imageContainer}>
						<Image
							source={require('../../images/icons/radish.png')}
						/>
					</View>

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
			</TouchableHighlight>
		);
	}
}

export default Event;

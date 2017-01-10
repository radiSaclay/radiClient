import React, { Component } from 'react';
import {
	ActivityIndicator,
	Text,
	View,
} from 'react-native';

import settings from '../../config/settings';
import styles from './styles';

class EventDetail extends Component {
	constructor(){
		super();
		this.state = {
			eventDetails: {},
			isLoaded: false
		}
	}

	componentWillMount(){
		this.getEventDetails();
	}

	getEventDetails() {
		return fetch(settings.urls.EVENTS_URL + this.props.eventId)
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				eventDetails: responseJson,
				isLoaded: true
			})
		})
		.catch((error) => {
			console.error(error);
		});
	}

	render() {
		if (!this.state.isLoaded){
			return(
				<ActivityIndicator />
			)
		} else{
			return(
				<View style={styles.container}>
					<Text style={styles.description}>
						{this.state.eventDetails.description}
					</Text>

					<Text style={styles.farmId}>
						{this.state.eventDetails.farmId}
					</Text>

					<Text style={styles.endDate}>
						{this.state.eventDetails.endAt}
					</Text>
				</View>
			)
		}
	}
}

EventDetail.propTypes = {
	eventId: React.PropTypes.number
};

export default EventDetail;

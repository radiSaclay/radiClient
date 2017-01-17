import React, { Component } from 'react';
import { ActivityIndicator,	AsyncStorage } from 'react-native';

import settings from '../../config/settings';

import EventsList from './EventsList';

class EventsListContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			eventsList: null,
			isLoaded: false,
		};
	}

	componentWillMount(){
		this.getEventsList();
	}

	/*	Loads data depending on the prop flow.
	*/
	getEventsList() {
		var flowUrl = '';
		switch (this.props.flow) {
			case settings.eventsFlowEnum.FARM_FLOW:
				break;
			case settings.eventsFlowEnum.PRODUCT_FLOW:
				break;
			case settings.eventsFlowEnum.SUBSCRIBMENT_FLOW:
			default:
				flowUrl = settings.urls.EVENTS_URL;
		}

		AsyncStorage.getItem(settings.keys.ID_TOKEN).then((idToken) => {
			fetch(flowUrl, {
				method: "GET",
				headers: {
					'Authorization': idToken
				}
			})
			.then((response) => response.json())
			.then((eventsList) => {
				this.setState({
					eventsList: eventsList,
					isLoaded: true
				})
			})
			.catch((error) => {
				console.error(error);
			})
		})
	}

	render() {
		if (this.state.isLoaded) {
			return (
				<EventsList	eventsList={this.state.eventsList} />
			)
		} else {
			return (
				<ActivityIndicator />
			)
		}
	}

}

EventsListContainer.propTypes = {
	flow: React.PropTypes.number,
}

export default EventsListContainer

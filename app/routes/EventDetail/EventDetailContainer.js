import React, {Component} from 'react';
import { AsyncStorage } from 'react-native';

import settings from '../../config/settings.js'

import EventDetail from './EventDetail.js';

class EventDetailContainer extends Component {
	constructor(props){
		super();
		// TODO: get the isPinned from the server once the route returns it
		this.state = {isPinned: false};
	}

	togglePinStatus(){
		AsyncStorage.getItem(settings.keys.ID_TOKEN).then((idToken) => {
			fetch((this.state.isPinned ? settings.urls.EVENTS_UNPIN_URL : settings.urls.EVENTS_PIN_URL) + this.props.id, {
				method: "POST",
				headers: {
					'Authorization': idToken
				}
			})
			.then((response) => {
				this.setState({isPinned: !this.state.isPinned});
			})
			.catch((error) => {
				console.error(error);
			})
		})
	}

	render() {
		return(
			<EventDetail
				togglePinStatus={this.togglePinStatus.bind(this)}

				description={this.props.description}
				endAt={this.props.endAt}
				farmId={this.props.farmId}
				isPinned={this.state.isPinned}
				/>
		)
	}
}

EventDetailContainer.propTypes = {
	description: React.PropTypes.string,
	endAt: React.PropTypes.string,
	farmId: React.PropTypes.number,
	id: React.PropTypes.number
};

export default EventDetailContainer;

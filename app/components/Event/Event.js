import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import ListItem from '../ListItem';

class Event extends Component {

	getEventDetail() {
		Actions.EventDetailRoute({id: this.props.eventId})
	}

	render() {
		return(
			<ListItem
				onTouchCallback={this.getEventDetail.bind(this)}

				date={this.props.endDate}
				detail={this.props.description}
				subtitle={this.props.farmName}
				title={this.props.title}
			/>
		);
	}
}

Event.propTypes = {
	// from parent
	endDate: React.PropTypes.string,
	eventId: React.PropTypes.number,
	farmName: React.PropTypes.string,
	title: React.PropTypes.string,
};

export default Event;

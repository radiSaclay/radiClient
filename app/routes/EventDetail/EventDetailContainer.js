import React, {Component} from 'react';

import EventDetail from './EventDetail.js'

class EventDetailContainer extends Component {
	render() {
		return(
			<EventDetail
				description={this.props.description}
				endAt={this.props.endAt}
				farmId={this.props.farmId}
				/>
		)
	}
}

EventDetailContainer.propTypes = {
	description: React.PropTypes.string,
	endAt: React.PropTypes.string,
	farmId: React.PropTypes.number
};

export default EventDetailContainer;

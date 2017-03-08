import React, { Component } from 'react';

import settings from '../../config/settings';

import EventsListContainer from './EventsListContainer';
import Frame from '../../components/Frame';

class EventsListRoute extends Component {
	render() {
		return (
			<Frame title={this.props.title}>
				<EventsListContainer/>
			</Frame>
		)
	}
}

export default EventsListRoute;

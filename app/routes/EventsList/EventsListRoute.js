import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as eventOperations from '../../operations/eventOperations';

import EventsListContainer from './EventsListContainer';
import Frame from '../../components/Frame';

class EventsListRoute extends Component {
	render() {
		return (
			<Frame
				quickActions={[
					{
						source: require('../../images/pin.png'),
						onPress: () => {this.props.operationDisplayPinned(!this.props.displayPinned)}
					}
				]}
				title={this.props.title}
				>
				<EventsListContainer displayPinned={this.props.displayPinned} />
			</Frame>
		)
	}
}

EventsListRoute.PropTypes = {
	// from redux
	displayPinned: React.PropTypes.bool,
	operationDisplayPinned: React.PropTypes.func,
}

const mapStateToProps = (store) => {
	return {
		displayPinned: store.events.displayPinned
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		operationDisplayPinned: (displayPinned) => dispatch(eventOperations.eventDisplayPinned(displayPinned))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsListRoute);

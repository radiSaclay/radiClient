import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import promises from '../../config/promises';
import settings from '../../config/settings';
import * as eventOperations from '../../operations/eventOperations';

import EventDetail from './EventDetail';

class EventDetailContainer extends Component {

	render() {
		var {idToken, id, event, pinned} = this.props
		return(
			<EventDetail
				togglePinStatus={this.props.togglePinStatus.bind(this, idToken, id, pinned)}
				event={event}
				isPinned={pinned}
				/>
		)
	}
}

EventDetailContainer.propTypes = {
	// from parent
	id: React.PropTypes.number.isRequired,

	// from redux
	event: React.PropTypes.shape({
		beginAt: React.PropTypes.string,
		description: React.PropTypes.string,
		endAt: React.PropTypes.string,
		farm: React.PropTypes.shape({
			id: React.PropTypes.number.isRequired,
			name: React.PropTypes.string.isRequired,
		}),
		pinned: React.PropTypes.bool,
		products: React.PropTypes.arrayOf(
			React.PropTypes.shape({
				id: React.PropTypes.number.isRequired,
				name: React.PropTypes.string.isRequired,
		})),
		publishAt: React.PropTypes.string,
		title: React.PropTypes.string,
	}),
	idToken: React.PropTypes.string,
	pinned: React.PropTypes.bool,
	togglePinStatus: React.PropTypes.func,
}

const mapStateToProps = (store, ownProps) => {
	let event = _.find(store.events.events, (event) => { return event.id === ownProps.id })
	return {
		event: event,
		idToken: store.user.idToken,
		pinned: event.pinned,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		togglePinStatus: (idToken, eventId, pinnedStatus) => dispatch(eventOperations.eventTogglePinnedStatus(idToken, eventId, pinnedStatus)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailContainer);

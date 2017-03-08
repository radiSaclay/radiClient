import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import promises from '../../config/promises';
import settings from '../../config/settings';
import * as eventOperations from '../../operations/eventOperations';

import EventDetail from './EventDetail';

class EventDetailContainer extends Component {

	render() {
		var {idToken, id, pinned} = this.props
		return(
			<EventDetail
				togglePinStatus={this.props.togglePinStatus.bind(this, idToken, id, pinned)}

				description={this.props.description}
				endAt={this.props.endAt}
				farmId={this.props.farmId}
				isPinned={this.props.pinned}
				/>
		)
	}
}

EventDetailContainer.propTypes = {
	// from parent
	beginAt: React.PropTypes.string,
	description: React.PropTypes.string,
	endAt: React.PropTypes.string,
	farmId: React.PropTypes.number,
	id: React.PropTypes.number,
	publishAt: React.PropTypes.string,

	// from redux
	idToken: React.PropTypes.string,
	pinned: React.PropTypes.bool,
	togglePinStatus: React.PropTypes.func,
}

const mapStateToProps = (store, ownProps) => {
	return {
		idToken: store.user.idToken,
		pinned: _.find(store.events.events, (event) => { return event.id === ownProps.id }).pinned,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		togglePinStatus: (idToken, eventId, pinnedStatus) => dispatch(eventOperations.eventTogglePinnedStatus(idToken, eventId, pinnedStatus)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailContainer);

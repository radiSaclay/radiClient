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
				farmId={this.props.farm.id}
				isPinned={this.props.pinned}
				/>
		)
	}
}

EventDetailContainer.propTypes = {
	// from parent
	id: React.PropTypes.number.isRequired,

	// from redux
	beginAt: React.PropTypes.string,
	description: React.PropTypes.string,
	endAt: React.PropTypes.string,
	farm: React.PropTypes.shape({
		id: React.PropTypes.number.isRequired,
		name: React.PropTypes.string.isRequired,
	}),
	idToken: React.PropTypes.string,
	pinned: React.PropTypes.bool,
	products: React.PropTypes.arrayOf(
		React.PropTypes.shape({
			id: React.PropTypes.number.isRequired,
			name: React.PropTypes.string.isRequired,
	})),
	publishAt: React.PropTypes.string,
	title: React.PropTypes.string,
	togglePinStatus: React.PropTypes.func,
}

const mapStateToProps = (store, ownProps) => {
	let event = _.find(store.events.events, (event) => { return event.id === ownProps.id })
	return {
		beginAt: event.beginAt,
		description: event.description,
		endAt: event.endAt,
		farm: event.farm,
		idToken: store.user.idToken,
		pinned: event.pinned,
		products: event.products,
		publishAt: event.publishAt,
		title: event.title,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		togglePinStatus: (idToken, eventId, pinnedStatus) => dispatch(eventOperations.eventTogglePinnedStatus(idToken, eventId, pinnedStatus)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailContainer);

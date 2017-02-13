import React, {Component} from 'react';
import { connect } from 'react-redux';

import promises from '../../config/promises.js'
import settings from '../../config/settings.js'

import EventDetail from './EventDetail.js';

class EventDetailContainer extends Component {
	constructor(props){
		super();
		this.state = {isPinned: props.pinned};
	}

	togglePinStatus(){
		let url = (this.state.isPinned ? settings.urls.EVENTS_UNPIN_URL : settings.urls.EVENTS_PIN_URL) + this.props.id
		promises.postWithToken(url, idToken)
		.then((response) => {
			this.setState({isPinned: !this.state.isPinned});
		})
		.catch((error) => {
			console.error(error);
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
	// from parent
	description: React.PropTypes.string,
	endAt: React.PropTypes.string,
	farmId: React.PropTypes.number,
	id: React.PropTypes.number,

	// from redux
	idToken: React.PropTypes.string,
}

const mapStateToProps = (store) => {
	return {
		idToken: store.user.idToken,
	}
}

export default connect(mapStateToProps)(EventDetailContainer);

import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';

import settings from '../../config/settings';

import EventDetailContainer from './EventDetailContainer';
import Frame from '../../components/Frame';

class EventDetailRoute extends Component {
	render() {
		return(
			<Frame
				navigation={{
					source: require('../../images/back.png'),
					onPress: function(){Actions.pop()}
				}}
				title={this.props.title}
				>
				<EventDetailContainer
					beginAt={this.props.beginAt}
					description={this.props.description}
					endAt={this.props.endAt}
					farmId={this.props.farmId}
					id={this.props.id}
					publishAt={this.props.publishAt}
					/>
			</Frame>
		)
	}
}

EventDetailRoute.propTypes = {
	// from parent
	beginAt: React.PropTypes.string,
	description: React.PropTypes.string,
	endAt: React.PropTypes.string,
	farmId: React.PropTypes.number,
	id: React.PropTypes.number,
	publishAt: React.PropTypes.string,
	title: React.PropTypes.string,
}

export default EventDetailRoute;

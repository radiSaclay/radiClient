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
				<EventDetailContainer id={this.props.id}/>
			</Frame>
		)
	}
}

EventDetailRoute.propTypes = {
	// from parent
	id: React.PropTypes.number.isRequired,
}

export default EventDetailRoute;

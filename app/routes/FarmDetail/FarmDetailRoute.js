import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux';

import settings from '../../config/settings.js'

import FarmDetailContainer from './FarmDetailContainer';
import Frame from '../../components/Frame';

class FarmDetailRoute extends Component {
	render() {
		return(
			<Frame
				navigation={{
					source: require('../../images/back.png'),
					onPress: function(){Actions.pop()}
				}}
				title={this.props.title}
				>
				<FarmDetailContainer id={this.props.id}/>
			</Frame>
		)
	}
}

FarmDetailRoute.propTypes = {
	// from parent
	id: React.PropTypes.number,
}

export default FarmDetailRoute

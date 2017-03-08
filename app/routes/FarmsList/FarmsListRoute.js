import React, { Component } from 'react'

import settings from '../../config/settings'

import FarmsListContainer from './FarmsListContainer'
import Frame from '../../components/Frame'

class FarmsListRoute extends Component {
	render() {
		return (
			<Frame title={this.props.title}>
				<FarmsListContainer/>
			</Frame>
		)
	}
}

export default FarmsListRoute;

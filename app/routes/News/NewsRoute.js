import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'

import Frame from '../../components/Frame'
import NewsContainer from './NewsContainer'

class NewsRoute extends Component {
	render() {
		return (
			<Frame title={this.props.title}>
				<NewsContainer/>
			</Frame>
		)
	}
}

export default NewsRoute

import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'

import settings from '../../config/settings'

import Frame from '../../components/Frame'
import ProductDetailContainer from './ProductDetailContainer'

class ProductDetailRoute extends Component {
	render() {
		return(
			<Frame
				navigation={{
					source: require('../../images/back.png'),
					onPress: function(){Actions.pop()}
				}}
				title={this.props.title}
				>
				<ProductDetailContainer
					farm={this.props.farm}
					id={this.props.id}
					name={this.props.name}
					/>
			</Frame>
		)
	}
}

ProductDetailRoute.propTypes = {
	// from parent
	farms: React.PropTypes.array,
	id: React.PropTypes.number.isRequired,
	name: React.PropTypes.string.isRequired,
}

export default ProductDetailRoute

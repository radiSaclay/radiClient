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
				<ProductDetailContainer id={this.props.id}/>
			</Frame>
		)
	}
}

ProductDetailRoute.propTypes = {
	// from parent
	id: React.PropTypes.number.isRequired,
}

export default ProductDetailRoute

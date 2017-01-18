import React, { Component } from 'react';

import settings from '../../config/settings';

import Product from './Product';

class ProductContainer extends Component {

	render() {
		return (
			<Product
				farms={this.props.farms}
				name={this.props.name}
				/>
		)
	}
}

ProductContainer.propTypes = {
	farms: React.PropTypes.array,
	id: React.PropTypes.number,
	name: React.PropTypes.string,
	subscribed: React.PropTypes.bool,
}

export default ProductContainer

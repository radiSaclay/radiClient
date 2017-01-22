import React, { Component } from 'react';

import settings from '../../config/settings';

import Product from './Product';

class ProductContainer extends Component {

	render() {
		return (
			<Product
				name={this.props.name}
				/>
		)
	}
}

ProductContainer.propTypes = {
	id: React.PropTypes.number,
	name: React.PropTypes.string,
}

export default ProductContainer

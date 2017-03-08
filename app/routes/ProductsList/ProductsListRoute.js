import React, { Component } from 'react';

import settings from '../../config/settings';

import Frame from '../../components/Frame';
import ProductsListContainer from './ProductsListContainer';

class ProductsListRoute extends Component {
	render() {
		return (
			<Frame title={this.props.title}>
				<ProductsListContainer/>
			</Frame>
		)
	}
}

export default ProductsListContainer;

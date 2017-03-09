import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import ListItem from '../ListItem';

class Product extends Component {

	getProductDetail() {
		Actions.ProductDetailRoute({id: this.props.id});
	}

	render() {
		return(
			<ListItem
				onTouchCallback={this.getProductDetail.bind(this)}

				title={this.props.name}
			/>
		);
	}
}

Product.propTypes = {
	// from parent
	/* TODO: ask server team to not send farms list in the PRODUCTS_URL route */
	farms: React.PropTypes.array,
	id: React.PropTypes.number.isRequired,
	name: React.PropTypes.string.isRequired,
}

export default Product

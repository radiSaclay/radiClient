import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

import promises from '../../config/promises';
import settings from '../../config/settings';

import Product from './Product';

class ProductContainer extends Component {

	getProductDetail() {
		AsyncStorage.getItem(settings.keys.ID_TOKEN)
		.then((idToken) => promises.getWithToken(settings.urls.PRODUCTS_URL + this.props.id, idToken))
		.then((response) => {
			Actions.ProductDetailContainer(response.data);
		})
		.catch((error) => {
			console.error(error.response.data)
		})
	}

	render() {
		return (
			<Product
				getProductDetail={this.getProductDetail.bind(this)}

				name={this.props.name}
				/>
		)
	}
}

ProductContainer.propTypes = {
	/* TODO: ask server team to not send farms list in the PRODUCTS_URL route */
	farms: React.PropTypes.array,
	id: React.PropTypes.number.isRequired,
	name: React.PropTypes.string.isRequired,
}

export default ProductContainer

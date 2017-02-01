import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native';

import promises from '../../config/promises';
import settings from '../../config/settings';

import ProductsList from './ProductsList';

class ProductsListContainer extends Component {

	constructor() {
		super()
		this.state = {
			productsList: null,
			isLoaded: false,
		}
	}

	componentDidMount(){
		this.getProductsList()
	}

	// TODO: add better error handling
	getProductsList() {
		AsyncStorage.getItem(settings.keys.ID_TOKEN)
		.then((idToken) => {
			promises.getWithToken(settings.urls.PRODUCTS_URL, idToken)
			.then((response) => {
				this.setState({
					productsList: response.data,
					isLoaded: true,
				})
			})
			.catch((error) => {
				console.error(error.response.data)
			})
		})
	}

	render() {
		if (this.state.isLoaded) {
			return (
				<ProductsList productsList={this.state.productsList} />
			)
		} else {
			return (
				<ActivityIndicator />
			)
		}
	}
}

export default ProductsListContainer

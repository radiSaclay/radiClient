import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native';

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

	getProductsList() {
		AsyncStorage.getItem(settings.keys.ID_TOKEN)
		.then((idToken) => {
			fetch(settings.urls.PRODUCTS_URL, {
				method: "GET",
				headers: {
					'Authorization': idToken
				}
			})
			.then((response) => response.json())
			.then((productsList) => {
				this.setState({
					productsList: productsList,
					isLoaded: true,
				})
			})
			.catch((error) => {
				console.error(error)
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

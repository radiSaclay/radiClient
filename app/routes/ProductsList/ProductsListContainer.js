import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import settings from '../../config/settings';
import * as productOperations from '../../operations/productOperations';

import ProductsList from './ProductsList';

class ProductsListContainer extends Component {

	componentWillMount(){
		// TODO: find better strategy to load know when to load products list
		if (!this.props.productsList.length){
			this.props.fetchProductsList(this.props.idToken)
		}
	}

	// TODO: add error handling
	render() {
		if (this.props.isLoading) {
			return (
				<ActivityIndicator />
			)
		} else {
			return (
				<ProductsList	productsList={this.props.productsList} />
			)
		}
	}
}

const mapStateToProps = (store) => {
	return {
		idToken: store.user.idToken,
		isLoading: store.products.isLoading,
		productsList: store.products.products
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchProductsList: (idToken) => dispatch(productOperations.productsListFetch(idToken))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListContainer);

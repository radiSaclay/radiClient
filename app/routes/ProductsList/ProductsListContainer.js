import React, { Component } from 'react';
import { connect } from 'react-redux';

import settings from '../../config/settings';
import * as productOperations from '../../operations/productOperations';

import ProductsList from './ProductsList';

class ProductsListContainer extends Component {

	onRefresh() {
		this.props.fetchProductsList(this.props.idToken)
	}

	// TODO: add error handling
	render() {
		return (
			<ProductsList
				productsList={this.props.productsList}
				isLoading={this.props.isLoading}
				onRefresh={this.onRefresh.bind(this)}
			/>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		idToken: store.user.idToken,
		isLoading: store.app.isLoading,
		productsList: store.products.products
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchProductsList: (idToken) => dispatch(productOperations.productsListFetch(idToken))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListContainer);

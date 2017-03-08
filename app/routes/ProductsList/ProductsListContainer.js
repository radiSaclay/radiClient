import React, { Component } from 'react';
import { connect } from 'react-redux';

import settings from '../../config/settings';
import * as productOperations from '../../operations/productOperations';

import Frame from '../../components/Frame';
import ProductsList from './ProductsList';

class ProductsListContainer extends Component {

	onRefresh() {
		this.props.fetchProductsList(this.props.idToken)
	}

	// TODO: add error handling
	render() {
		return (
			<Frame title={this.props.title}>
				<ProductsList
					productsList={this.props.productsList}
					isLoading={this.props.isLoading}
					onRefresh={this.onRefresh.bind(this)}
				/>
			</Frame>
		)
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

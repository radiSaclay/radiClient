import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import promises from '../../config/promises'
import settings from '../../config/settings'
import * as productOperations from '../../operations/productOperations'

import ProductDetail from './ProductDetail'

class ProductDetailContainer extends Component {

	render() {
		var {idToken, id, subscribed} = this.props
		return(
			<ProductDetail
				toggleSubscriptionStatus={this.props.toggleSubscriptionStatus.bind(this, idToken, id, subscribed)}

				farms={this.props.farms}
				name={this.props.name}
				isSubscribed={this.props.subscribed}
				/>
		)
	}
}

ProductDetailContainer.propTypes = {
	// from parent
	id: React.PropTypes.number.isRequired,

	// from redux
	ancestors: React.PropTypes.arrayOf(React.PropTypes.number),
	farms: React.PropTypes.arrayOf(React.PropTypes.number),
	idToken: React.PropTypes.string,
	name: React.PropTypes.string.isRequired,
	subproducts: React.PropTypes.arrayOf(React.PropTypes.number),
	subscribed: React.PropTypes.bool.isRequired,
	toggleSubscriptionStatus: React.PropTypes.func,
}

const mapStateToProps = (store, ownProps) => {
	let product = _.find(store.products.products, (product) => { return product.id === ownProps.id });
	return {
		ancestors: product.ancestors,
		idToken: store.user.idToken,
		farms: product.farms,
		name: product.name,
		subproducts: product.subproducts,
		subscribed: product.subscribed,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSubscriptionStatus: (idToken, productId, subscribedStatus) => dispatch(productOperations.productToggleSubscribedStatus(idToken, productId, subscribedStatus)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer)

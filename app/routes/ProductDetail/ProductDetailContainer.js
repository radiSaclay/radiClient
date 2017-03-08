import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import _ from 'lodash'

import promises from '../../config/promises'
import settings from '../../config/settings'
import * as productOperations from '../../operations/productOperations'

import Frame from '../../components/Frame'
import ProductDetail from './ProductDetail'

class ProductDetailContainer extends Component {

	render() {
		var {idToken, id, subscribed} = this.props
		return(
			<Frame
				navigation={{
					source: require('../../images/back.png'),
					onPress: function(){Actions.pop()}
				}}
				title={this.props.title}
				>
				<ProductDetail
					toggleSubscriptionStatus={this.props.toggleSubscriptionStatus.bind(this, idToken, id, subscribed)}

					farms={this.props.farms}
					name={this.props.name}
					isSubscribed={this.props.subscribed}
					/>
			</Frame>
		)
	}
}

ProductDetailContainer.propTypes = {
	// from parent
	farms: React.PropTypes.array,
	id: React.PropTypes.number.isRequired,
	name: React.PropTypes.string.isRequired,

	// from redux
	idToken: React.PropTypes.string,
	subscribed: React.PropTypes.bool.isRequired,
	toggleSubscriptionStatus: React.PropTypes.func,
}

const mapStateToProps = (store, ownProps) => {
	return {
		idToken: store.user.idToken,
		subscribed: _.find(store.products.products, (product) => { return product.id === ownProps.id }).subscribed,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSubscriptionStatus: (idToken, productId, subscribedStatus) => dispatch(productOperations.productToggleSubscribedStatus(idToken, productId, subscribedStatus)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer)

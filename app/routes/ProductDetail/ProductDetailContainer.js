import React, { Component } from 'react'
import { connect } from 'react-redux'

import promises from '../../config/promises'
import settings from '../../config/settings'

import ProductDetail from './ProductDetail'

class ProductDetailContainer extends Component {

	constructor(props){
		super(props)
		this.state = {isSubscribed: this.props.subscribed}
	}

	toggleSubscriptionStatus(){
		promises.postWithToken((this.state.isSubscribed ? settings.urls.PRODUCTS_UNSUBSCRIBE_URL : settings.urls.PRODUCTS_SUBSCRIBE_URL) + this.props.id, idToken)
		.then((response) => {
			/* TODO: get the confirmation of the change of the isSubscribed state from the server*/
			this.setState({isSubscribed: !this.state.isSubscribed});
		})
		.catch((error) => {
			console.error(error);
		})
	}

	render() {
		return(
			<ProductDetail
				toggleSubscriptionStatus={this.toggleSubscriptionStatus.bind(this)}

				farms={this.props.farms}
				name={this.props.name}
				isSubscribed={this.state.isSubscribed}
				/>
		)
	}
}

ProductDetailContainer.propTypes = {
	// from parent
	farms: React.PropTypes.array,
	id: React.PropTypes.number.isRequired,
	name: React.PropTypes.string.isRequired,
	subscribed: React.PropTypes.bool.isRequired,

	// from redux
	idToken: React.PropTypes.string,
}

const mapStateToProps = (store) => {
	return {
		idToken: store.user.idToken,
	}
}

export default connect(mapStateToProps)(ProductDetailContainer)

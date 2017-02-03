import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

import promises from '../../config/promises'
import settings from '../../config/settings'

import ProductDetail from './ProductDetail'

class ProductDetailContainer extends Component {

	constructor(props){
		super(props)
		this.state = {isSubscribed: this.props.subscribed}
	}

	toggleSubscriptionStatus(){
		AsyncStorage.getItem(settings.keys.ID_TOKEN)
		.then((idToken) => promises.postWithToken((this.state.isSubscribed ? settings.urls.PRODUCTS_UNSUBSCRIBE_URL : settings.urls.PRODUCTS_SUBSCRIBE_URL) + this.props.id, idToken))
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
	farms: React.PropTypes.array,
	id: React.PropTypes.number.isRequired,
	name: React.PropTypes.string.isRequired,
	subscribed: React.PropTypes.bool.isRequired,
}

export default ProductDetailContainer

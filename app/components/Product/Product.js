import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import promises from '../../config/promises';
import settings from '../../config/settings';

import ListItem from '../ListItem';

class Product extends Component {

	getProductDetail() {
		promises.getWithToken(settings.urls.PRODUCTS_URL + this.props.id, this.props.idToken)
		.then((response) => {
			Actions.ProductDetailRoute(response.data);
		})
		.catch((error) => {
			console.error(error.response.data)
		})
	}

	render() {
		return(
			<ListItem
				onTouchCallback={this.getProductDetail.bind(this)}

				title={this.props.name}
			/>
		);
	}
}

Product.propTypes = {
	// from parent
	/* TODO: ask server team to not send farms list in the PRODUCTS_URL route */
	farms: React.PropTypes.array,
	id: React.PropTypes.number.isRequired,
	name: React.PropTypes.string.isRequired,

	// from redux
	idToken: React.PropTypes.string,
}

const mapStateToProps = (store) => {
	return {
		idToken: store.user.idToken,
	}
}

export default connect(mapStateToProps)(Product)

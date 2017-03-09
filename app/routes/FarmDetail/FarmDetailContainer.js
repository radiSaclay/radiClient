import React, { Component } from 'react'
import { connect } from 'react-redux';
import _ from 'lodash'

import promises from '../../config/promises.js'
import settings from '../../config/settings.js'
import * as farmOperations from '../../operations/farmOperations'

import FarmDetail from './FarmDetail';

class FarmDetailContainer extends Component {

	render() {
		var {idToken, id, subscribed} = this.props
		return(
			<FarmDetail
				toggleSubscriptionStatus={this.props.toggleSubscriptionStatus.bind(this, idToken, id, subscribed)}

				address={this.props.address}
				email={this.props.email}
				id={this.props.id}
				isSubscribed={this.props.subscribed}
				name={this.props.name}
				ownerId={this.props.ownerId}
				phone={this.props.phone}
				products={this.props.products}
				website={this.props.website}
				/>
		)
	}
}

FarmDetailContainer.propTypes = {
	// from parent
	id: React.PropTypes.number.isRequired,

	// from redux
	address: React.PropTypes.string,
	email: React.PropTypes.string,
	idToken: React.PropTypes.string,
	name: React.PropTypes.string,
	ownerId: React.PropTypes.number,
	phone: React.PropTypes.string,
	products: React.PropTypes.arrayOf(React.PropTypes.number),
	subscribed: React.PropTypes.bool,
	toggleSubscriptionStatus: React.PropTypes.func,
	website: React.PropTypes.string,
}

const mapStateToProps = (store, ownProps) => {
	let farm = _.find(store.farms.farms, (farm) => { return farm.id === ownProps.id });
	return {
		address: farm.address,
		email: farm.email,
		idToken: store.user.idToken,
		name: farm.name,
		ownerId: farm.ownerId,
		phone: farm.phone,
		products: farm.products,
		subscribed: farm.subscribed,
		website: farm.website,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSubscriptionStatus: (idToken, farmId, subscribedStatus) => dispatch(farmOperations.farmToggleSubscribedStatus(idToken, farmId, subscribedStatus)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FarmDetailContainer)

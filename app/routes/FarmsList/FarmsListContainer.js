import React, { Component } from 'react'
import { connect } from 'react-redux'

import settings from '../../config/settings'
import * as farmOperations from '../../operations/farmOperations'

import FarmsList from './FarmsList'

class FarmsListContainer extends Component {

	onRefresh() {
		this.props.fetchFarmsList(this.props.idToken)
	}

	// TODO: add error handling
	render() {
		return (
			<FarmsList
				farmsList={this.props.farmsList}
				isLoading={this.props.isLoading}
				onRefresh={this.onRefresh.bind(this)}
			/>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		farmsList: store.farms.farms,
		idToken: store.user.idToken,
		isLoading: store.app.isLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchFarmsList: (idToken) => dispatch(farmOperations.farmsListFetch(idToken))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FarmsListContainer);

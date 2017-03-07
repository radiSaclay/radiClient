import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import settings from '../../config/settings'
import * as farmOperations from '../../operations/farmOperations'

import FarmsList from './FarmsList'
import Header from '../../components/Header'

class FarmsListContainer extends Component {

	onRefresh() {
		this.props.fetchFarmsList(this.props.idToken)
	}

	// TODO: add error handling
	render() {
		return (
			<Header title={this.props.title}>
				<FarmsList
					farmsList={this.props.farmsList}
					isLoading={this.props.isLoading}
					onRefresh={this.onRefresh.bind(this)}
				/>
			</Header>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		farmsList: store.farms.farms,
		idToken: store.user.idToken,
		isLoading: store.farms.isLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchFarmsList: (idToken) => dispatch(farmOperations.farmsListFetch(idToken))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FarmsListContainer);

import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import settings from '../../config/settings'
import * as farmOperations from '../../operations/farmOperations'

import FarmsList from './FarmsList'

class FarmsListContainer extends Component {

	componentWillMount(){
		// TODO: find better strategy to load know when to load farms list
		if (!this.props.farmsList.length){
			this.props.fetchFarmsList(this.props.idToken)
		}
	}

	// TODO: add error handling
	render() {
		if (this.props.isLoading) {
			return (
				<ActivityIndicator />
			)
		} else {
			return (
				<FarmsList	farmsList={this.props.farmsList} />
			)
		}
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

import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import promises from '../../config/promises'
import settings from '../../config/settings'

import Farm from './Farm'

class FarmContainer extends Component {

	getFarmDetail() {
		promises.getWithToken(settings.urls.FARMS_URL + this.props.id, this.props.idToken)
		.then((response) => {
			Actions.FarmDetailContainer(response.data)
		})
		.catch((error) => {
			console.error(error.response.data)
		})
	}

	render() {
		return (
			<Farm
				getFarmDetail={this.getFarmDetail.bind(this)}

				address={this.props.address}
				name={this.props.name}
				/>
		)
	}
}

FarmContainer.propTypes = {
	// from parent
	address: React.PropTypes.string,
	id: React.PropTypes.number,
	name: React.PropTypes.string,

	// from redux
	idToken: React.PropTypes.string,
}

const mapStateToProps = (store) => {
	return {
		idToken: store.user.idToken,
	}
}

export default connect(mapStateToProps)(FarmContainer)

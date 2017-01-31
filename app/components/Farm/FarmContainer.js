import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

import promises from '../../config/promises'
import settings from '../../config/settings'

import Farm from './Farm'

class FarmContainer extends Component {

	getFarmDetail() {
		AsyncStorage.getItem(settings.keys.ID_TOKEN)
		.then((idToken) => {
			promises.getWithToken(settings.urls.FARMS_URL + this.props.id, idToken)
			.then((response) => {
				Actions.FarmDetailContainer(response.data)
			})
			.catch((error) => {
				console.error(error.response.data)
			})
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
	address: React.PropTypes.string,
	id: React.PropTypes.number,
	name: React.PropTypes.string,
}

export default FarmContainer

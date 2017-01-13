import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

import settings from '../../config/settings'

import Farm from './Farm'

class FarmContainer extends Component {

	getFarmDetail() {
		AsyncStorage.getItem(settings.keys.ID_TOKEN).then((idToken) => {
			fetch(settings.urls.FARMS_URL + this.props.id, {
				method: "GET",
				headers: {
					'Authorization': idToken
				}
			})
			.then((response) => response.json())
			.then((farmDetail) => {
				Actions.FarmDetailContainer(farmDetail)
			})
			.catch((error) => {
				console.error(error)
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

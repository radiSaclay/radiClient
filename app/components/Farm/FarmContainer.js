import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'

import settings from '../../config/settings'

import Farm from './Farm'

class FarmContainer extends Component {

	getFarmDetail() {
		fetch(settings.urls.FARMS_URL + this.props.id)
		.then((response) => response.json())
		.then((farmDetail) => {
			Actions.FarmDetail(farmDetail)
		})
		.catch((error) => {
			console.error(error)
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
	email: React.PropTypes.string,
	id: React.PropTypes.number,
	name: React.PropTypes.string,
	ownerId: React.PropTypes.number,
	phone: React.PropTypes.string,
	website: React.PropTypes.string,
}

export default FarmContainer

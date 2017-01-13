import React, { Component } from 'react'
import { AsyncStorage } from 'react-native';

import settings from '../../config/settings.js'

import FarmDetail from './FarmDetail.js';

class FarmDetailContainer extends Component {
	constructor(props){
		super();
		this.state = {isSubscribed: props.subscribed};
	}

	toggleSubscriptionStatus(){
		AsyncStorage.getItem(settings.keys.ID_TOKEN).then((idToken) => {
			fetch(settings.urls.FARMS_URL + (this.state.isSubscribed ? 'unsubscribe' : 'subscribe') + '/' + this.props.id, {
				method: "POST",
				headers: {
					'Authorization': idToken
				}
			})
			.then((response) => {
				this.setState({isSubscribed: !this.state.isSubscribed});
			})
			.catch((error) => {
				console.error(error);
			})
		})
	}

	render() {
		return(
			<FarmDetail
				toggleSubscriptionStatus={this.toggleSubscriptionStatus.bind(this)}

				address={this.props.address}
				email={this.props.email}
				id={this.props.id}
				isSubscribed={this.state.isSubscribed}
				name={this.props.name}
				ownerId={this.props.ownerId}
				phone={this.props.phone}
				website={this.props.website}
				/>
		)
	}
}

FarmDetailContainer.propTypes = {
	address: React.PropTypes.string,
	email: React.PropTypes.string,
	id: React.PropTypes.number,
	name: React.PropTypes.string,
	ownerId: React.PropTypes.number,
	phone: React.PropTypes.string,
	subscribed: React.PropTypes.bool,
	website: React.PropTypes.string,
}

export default FarmDetailContainer

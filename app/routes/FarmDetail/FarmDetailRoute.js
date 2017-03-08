import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux';

import settings from '../../config/settings.js'

import FarmDetailContainer from './FarmDetailContainer';
import Frame from '../../components/Frame';

class FarmDetailRoute extends Component {
	render() {
		return(
			<Frame
				navigation={{
					source: require('../../images/back.png'),
					onPress: function(){Actions.pop()}
				}}
				title={this.props.title}
				>
				<FarmDetailContainer
					address={this.props.address}
					email={this.props.email}
					id={this.props.id}
					name={this.props.name}
					ownerId={this.props.ownerId}
					phone={this.props.phone}
					products={this.props.products}
					website={this.props.website}
					/>
			</Frame>
		)
	}
}

FarmDetailRoute.propTypes = {
	// from parent
	address: React.PropTypes.string,
	email: React.PropTypes.string,
	id: React.PropTypes.number,
	name: React.PropTypes.string,
	ownerId: React.PropTypes.number,
	phone: React.PropTypes.string,
	products: React.PropTypes.arrayOf(
		React.PropTypes.shape({
			id: React.PropTypes.number.isRequired,
			name: React.PropTypes.string.isRequired,
	})),
	website: React.PropTypes.string,
}

export default FarmDetailRoute

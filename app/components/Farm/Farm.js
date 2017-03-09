import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'

import ListItem from '../ListItem';

class Farm extends Component {

	getFarmDetail() {
		Actions.FarmDetailRoute({id: this.props.id})
	}

	render() {
		return(
			<ListItem
				onTouchCallback={this.getFarmDetail.bind(this)}

				subtitle={this.props.address}
				title={this.props.name}
			/>
		);
	}
}

Farm.propTypes = {
	// from parent
	address: React.PropTypes.string,
	id: React.PropTypes.number,
	name: React.PropTypes.string,
}

export default Farm

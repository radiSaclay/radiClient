import React, { Component } from 'react'
import {
	Text,
	View,
} from 'react-native'

import styles from './styles'

class FarmDetail extends Component {
	render() {
		return (
			<View style={styles.mainContainer}>
				<Text>
					{this.props.id}
				</Text>

				<Text>
					{this.props.name}
				</Text>

				<Text>
					{this.props.ownerId}
				</Text>

				<Text>
					{this.props.address}
				</Text>

				<Text>
					{this.props.website}
				</Text>

				<Text>
					{this.props.phone}
				</Text>

				<Text>
					{this.props.email}
				</Text>
			</View>
		)
	}
}

FarmDetail.propTypes = {
	address: React.PropTypes.string,
	email: React.PropTypes.string,
	id: React.PropTypes.number,
	name: React.PropTypes.string,
	ownerId: React.PropTypes.number,
	phone: React.PropTypes.string,
	website: React.PropTypes.string,
}

export default FarmDetail

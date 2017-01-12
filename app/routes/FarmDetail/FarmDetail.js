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
					Id: {this.props.id}
				</Text>

				<Text>
					Nom: {this.props.name}
				</Text>

				<Text>
					Id propriétaire: {this.props.ownerId}
				</Text>

				<Text>
					Adresse: {this.props.address}
				</Text>

				<Text>
					Site web: {this.props.website}
				</Text>

				<Text>
					Téléphone: {this.props.phone}
				</Text>

				<Text>
					Mail: {this.props.email}
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

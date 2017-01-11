import React, { Component } from 'react'
import {
	Image,
	Text,
	TouchableHighlight,
	View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import styles from './styles'

class Farm extends Component {
	render() {
		return (
			<TouchableHighlight onPress={() => Actions.FarmDetail(this.props)}>
				<View style={styles.mainContainer}>
					<View style={styles.imageContainer}>
						<Image
							source={require('../../images/farm.png')}
							/>
					</View>

					<View style={styles.textContainer}>
						<Text style={styles.name}>
							{this.props.name}
						</Text>

						<View style={styles.subtitle}>
							<Text style={styles.address}>
								{this.props.address}
							</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}

Farm.propTypes = {
	address: React.PropTypes.string,
	email: React.PropTypes.string,
	id: React.PropTypes.number,
	name: React.PropTypes.string,
	ownerId: React.PropTypes.number,
	phone: React.PropTypes.string,
	website: React.PropTypes.string,
}

export default Farm;

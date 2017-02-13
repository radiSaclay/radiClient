import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

import ImageButton from '../ImageButton'

class Header extends Component {
	render() {
		return (
			<View style={styles.mainContainer}>
				<View style={styles.headerContainer}>
					<View style={styles.navContainer}>
						{
							this.props.navigation &&
							<ImageButton
								onPress={this.props.navigation.onPress}
								source={this.props.navigation.source}
								/>
						}
					</View>

					<View style={styles.titleContainer}>
						<Text style={styles.title}>
							{this.props.title}
						</Text>
					</View>

					<View style={styles.actionsContainer}>
						{
							this.props.actions &&
							this.props.actions.length > 0 &&
							this.props.actions.map(function(action, key){
								return (
									<ImageButton
										key={key}
										onPress={action.onPress}
										source={action.source}
										/>
								)
							})
						}
					</View>
				</View>
			</View>
		)
	}
}

Header.propTypes = {
	// from parent
	actions: React.PropTypes.arrayOf(
		React.PropTypes.shape({
			onPress: React.PropTypes.func.isRequired,
			source: React.PropTypes.number.isRequired,
	})),
	navigation: React.PropTypes.shape({
		onPress: React.PropTypes.func.isRequired,
		source: React.PropTypes.number.isRequired,
	}),
	title: React.PropTypes.string.isRequired,
}

export default Header

import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

import ImageButton from '../ImageButton'

class Header extends Component {
	render() {
		return (
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

				<View style={styles.quickActionsContainer}>
					{
						this.props.quickActions &&
						this.props.quickActions.length > 0 &&
						this.props.quickActions.map(function(action, key){
							return (
								<ImageButton
									key={key}
									onPress={action.onPress}
									source={action.source}
									/>
							)
						})
					}

					{
						<ImageButton
							onPress={this.props.openControlPanel}
							source={require('../../images/menu.png')}
							/>
					}
				</View>
			</View>
		)
	}
}

Header.propTypes = {
	// from parent
	navigation: React.PropTypes.shape({
		onPress: React.PropTypes.func.isRequired,
		source: React.PropTypes.number.isRequired,
	}),
	openControlPanel: React.PropTypes.func.isRequired,
	quickActions: React.PropTypes.arrayOf(
		React.PropTypes.shape({
			onPress: React.PropTypes.func.isRequired,
			source: React.PropTypes.number.isRequired,
	})),
	title: React.PropTypes.string.isRequired,
}

export default Header

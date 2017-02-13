import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import styles from './styles'

class SideMenu extends Component {
	render() {
		return (
			<View style={styles.mainContainer}>
				<View style={styles.profilContainer}>
					<Text>
						Mon petit profile à moi
					</Text>
				</View>

				<View style={styles.actionsContainer}>
					<ScrollView>
						{
							this.props.actions &&
							this.props.actions.length > 0 &&
							this.props.actions.map(function(action, key){
								return (
									<TouchableOpacity
										key={key}
										onPress={action.onPress}
										style={styles.action}
										>
										<Text>
											{action.label}
										</Text>
									</TouchableOpacity>
								)
							})
						}
					</ScrollView>
				</View>
			</View>
		)
	}
}

SideMenu.propTypes = {
	// from parent
	actions: React.PropTypes.arrayOf(
		React.PropTypes.shape({
			label: React.PropTypes.string.isRequired,
			onPress: React.PropTypes.func.isRequired,
	})),
}

export default SideMenu

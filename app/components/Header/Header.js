import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Drawer from 'react-native-drawer'

import styles from './styles'

import ImageButton from '../ImageButton'
import SideMenu from '../SideMenu'

class Header extends Component {
	openControlPanel() {
		this._sideMenu.open()
	}

	render() {
		return (
			<Drawer
				acceptPan={true}
				content={<SideMenu actions={this.props.menuActions} />}
				openDrawerOffset={0.1}
				ref={(ref) => this._sideMenu = ref}
				side="right"
				tapToClose={true}
				type="overlay"
				>

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
							this.props.menuActions &&
							this.props.menuActions.length > 0 &&
							<ImageButton
								onPress={this.openControlPanel.bind(this)}
								source={require('../../images/menu.png')}
								/>
						}
					</View>
				</View>

				<View style={styles.mainContainer}>
					{this.props.children}
				</View>
			</Drawer>
		)
	}
}

Header.propTypes = {
	// from parent
	menuActions: React.PropTypes.arrayOf(
		React.PropTypes.shape({
			label: React.PropTypes.string.isRequired,
			onPress: React.PropTypes.func.isRequired,
	})),
	navigation: React.PropTypes.shape({
		onPress: React.PropTypes.func.isRequired,
		source: React.PropTypes.number.isRequired,
	}),
	quickActions: React.PropTypes.arrayOf(
		React.PropTypes.shape({
			onPress: React.PropTypes.func.isRequired,
			source: React.PropTypes.number.isRequired,
	})),
	title: React.PropTypes.string.isRequired,
}

export default Header

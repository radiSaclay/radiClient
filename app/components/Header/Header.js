import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Drawer from 'react-native-drawer'
import { ActionConst, Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import styles from './styles'

import * as userOperations from '../../operations/userOperations'

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

	// from redux
	userLogout: React.PropTypes.func,
}

const mapStateToProps = (store) => { return {} }

const mapDispatchToProps = (dispatch) => {
	return {
		userLogout: () => dispatch(userOperations.userLogout())
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	stateProps.menuActions = ownProps.menuActions.concat([
		{
			// Adds logout option to the SideMenu
			label: 'Logout',
			onPress: function(){
				dispatchProps.userLogout()
				Actions.Authentication({type: ActionConst.REPLACE})
			}
		}
	])
	return Object.assign({}, ownProps, stateProps, dispatchProps)
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Header);

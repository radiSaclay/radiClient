import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Drawer from 'react-native-drawer'
import { LoginManager } from 'react-native-fbsdk';
import { ActionConst, Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import styles from './styles'

import * as userOperations from '../../operations/userOperations'

import Header from '../Header'
import ImageButton from '../ImageButton'
import SideMenu from '../SideMenu'

class Frame extends Component {
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

				<Header
					navigation={this.props.navigation}
					openControlPanel={this.openControlPanel.bind(this)}
					quickActions={this.props.quickActions}
					title={this.props.title}
					/>

				<View style={styles.bodyContainer}>
					{this.props.children}
				</View>
			</Drawer>
		)
	}
}

Frame.propTypes = {
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
	stateProps.menuActions = (ownProps.menuActions || []).concat([
		{
			// Adds logout option to the SideMenu
			label: 'Logout',
			onPress: function(){
				LoginManager.logOut()
				dispatchProps.userLogout()
				Actions.Authentication({type: ActionConst.RESET})
			}
		}
	])
	return Object.assign({}, ownProps, stateProps, dispatchProps)
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Frame);

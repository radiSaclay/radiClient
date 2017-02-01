import React, { Component } from 'react';
import {
	Alert,
	AsyncStorage,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
import Drawer from 'react-native-drawer'
import {
	ActionConst,
	Actions
} from 'react-native-router-flux';
import { connect } from 'react-redux';

import settings from '../../config/settings';
import styles from './styles';

import * as userOperations from '../../operations/userOperations'

import Header from '../../components/Header'
import SideMenu from '../../components/SideMenu'

class AccountDisplay extends Component {
	constructor() {
		super()
		this.actions = [
			{
				label: "Log out",
				onPress: this.userLogout.bind(this),
			},
		]
	}

	// TODO: improve AsyncStorage acces and Action firing
	async userLogout() {
		this.props.userLogout()
		try {
			await AsyncStorage.removeItem(settings.keys.ID_TOKEN);
			Actions.Authentication({type: ActionConst.REPLACE});
		} catch (error) {
			console.log('AsyncStorage error: ' + error.message);
		}
	}

	openControlPanel() {
		this._sideMenu.open()
	}

	render() {
		return (
			<Drawer
				acceptPan={true}
				content={<SideMenu actions={this.actions} />}
				openDrawerOffset={0.2}
				ref={(ref) => this._sideMenu = ref}
				side="right"
				tapToClose={true}
				type="overlay"
				>
				<Header
					actions={[
						{
							source: require('../../images/settings.png'),
							onPress: function(){Alert.alert('Settings Clicked !')},
						},
						{
							source: require('../../images/menu.png'),
							onPress: this.openControlPanel.bind(this),
						}
					]}
					navigation={{
						source: require('../../images/back.png'),
						onPress: function(){Actions.News()},
					}}
					title='Mon Compte'
					/>

				<View style={styles.mainContainer}>
					{/* Firstname, lastname */}
					<View style={styles.horizontalContainer}>
						<Image source={require('../../images/user.png')} />
						<TextInput
							style={styles.inputText}
							editable={false}
							keyboardType='default'
							returnKeyType='next'
							autoCapitalize='none'
							autoCorrect={false}
							underlineColorAndroid='transparent'
							placeholder='John'
							/>
						<TextInput
							style={styles.inputText}
							editable={false}
							keyboardType='default'
							returnKeyType='next'
							autoCapitalize='none'
							autoCorrect={false}
							underlineColorAndroid='transparent'
							placeholder='Doe'
							/>
					</View>

					{/* Password */}
					<View style={styles.horizontalContainer}>
						<Image source={require('../../images/key.png')} />
						<TextInput
							style={styles.inputText}
							editable={false}
							keyboardType='default'
							returnKeyType='next'
							autoCapitalize='none'
							autoCorrect={false}
							underlineColorAndroid='transparent'
							secureTextEntry={true}
							placeholder='xxxxxxxxxxxxxxx'
						/>
					</View>

					{/* Phone number */}
					<View style={styles.horizontalContainer}>
						<Image source={require('../../images/phone.png')} />
						<TextInput
							style={styles.inputText}
							editable={false}
							keyboardType='phone-pad'
							returnKeyType='next'
							autoCapitalize='none'
							autoCorrect={false}
							underlineColorAndroid='transparent'
							placeholder='0600000001'
							/>
					</View>

					{/* Button to modify the information */}
					<TouchableOpacity
						onPress={() => Actions.AccountDisplay()}
						style={styles.buttonWrapper}
						>
						<Image source={require('../../images/settings.png')} />
						<Text style={styles.buttonText}>
							Modifier
						</Text>
					</TouchableOpacity>
				</View>
			</Drawer>
		);
	}
}

const mapStateToProps = (store) => { return {user: store.user} }

const mapDispatchToProps = (dispatch) => {
	return {
		userLogout: () => dispatch(userOperations.userLogout())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountDisplay);

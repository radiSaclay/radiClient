import React, { Component } from 'react';
import {
	ActivityIndicator,
	Alert,
	AsyncStorage,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
import { ActionConst, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

import styles from './styles';

import promises from '../../config/promises';
import settings from '../../config/settings';
import * as userOperations from '../../operations/userOperations'

class Authentication extends Component {
	constructor(){
		super();
		this.state = {
			email: null,
			password: null
		}
	}

	// TODO:
	// 	1- Do we still need to store the idToken in the AsyncStorage since it's already on the store?
	// 	2 - Find a better way to fire the action transition once the authentication has been verified
	componentWillUpdate(nextProps) {
		if(nextProps.idToken) {
			this.onValueChange(settings.keys.ID_TOKEN, nextProps.idToken)
			Actions.MainTab({type: ActionConst.REPLACE})
		}
	}

	async onValueChange(item, selectedValue) {
		try {
			await AsyncStorage.setItem(item, selectedValue);
		} catch (error) {
			console.log('AsyncStorage error: ' + error.message);
		}
	}

	userLogin() {
		if (this.state.email && this.state.password){
			this.props.userLogin(this.state.email, this.state.password)
		}
	}

	userSignup() {
		if (this.state.email && this.state.password){
			this.props.userSignup(this.state.email, this.state.password)
		}
	}

	render() {
		if (this.props.isLoading) {
			return <ActivityIndicator />
		} else {
			return (
				<View style={styles.container}>
					<Image
						source={require('../../images/logo.png')}
						style={styles.logo}
						/>
					<Text style={styles.title}>
						RadiSaclay
					</Text>
					<View style={styles.form}>
						<TextInput
							autoCapitalize='none'
							autoCorrect={false}
							editable={true}
							keyboardType='email-address'
							onChangeText={(email) => this.setState({email})}
							placeholder='Email'
							ref='email'
							returnKeyType='next'
							style={styles.inputText}
							value={this.state.email}
							underlineColorAndroid='transparent'
							/>
						<TextInput
							autoCapitalize='none'
							autoCorrect={false}
							editable={true}
							keyboardType='default'
							onChangeText={(password) => this.setState({password})}
							placeholder='Password'
							ref='password'
							returnKeyType='next'
							secureTextEntry={true}
							style={styles.inputText}
							value={this.state.password}
							underlineColorAndroid='transparent'
							/>
						<TouchableOpacity style={styles.buttonWrapper}>
							<Text
								style={styles.buttonText}
								onPress={this.userLogin.bind(this)}
								>
								Log In
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.buttonWrapper}>
							<Text
								style={styles.buttonText}
								onPress={this.userSignup.bind(this)}
								>
								Sign Up
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			);
		}
	}
}

const mapStateToProps = (store) => {
  return {
		idToken: store.user.idToken,
		isLoading: store.user.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		userLogin: (email, password) => {
			dispatch(userOperations.userAuth(
				settings.urls.AUTH_LOGIN_URL,
				{
					email,
					password
				}
			))
		},
		userSignup: (email, password) => {
			dispatch(userOperations.userAuth(
				settings.urls.AUTH_SIGNUP_URL,
				{
					email,
					password
				}
			))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);

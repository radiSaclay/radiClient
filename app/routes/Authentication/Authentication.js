import React, { Component } from 'react';
import { AccessToken, LoginButton } from 'react-native-fbsdk';
import {
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
import Loader from '../../components/Loader'
import * as userOperations from '../../operations/userOperations'
import * as appOperations from '../../operations/appOperations'

class Authentication extends Component {
	constructor(){
		super();
		this.state = {
			email: null,
			isEmailValid: null,
			isPasswordValid: null,
			password: null
		}
	}

	// TODO: Find a better way to fire the action transition once the authentication has been verified
	componentWillUpdate(nextProps) {
		if(nextProps.idToken) {
			Actions.MainTab({type: ActionConst.REPLACE})
		}
		if(nextProps.errorMessage){
			Alert.alert(
				"Problème d'authentification",
				nextProps.errorMessage,
				[
					{text: 'OK', onPress: () => this.props.errorRemove()}
				],
				{cancelable: false}
			)
		}
	}

	facebookLogin(error, result) {
		if (error) {
			console.log('login has error: ' + result.error);
		} else if (result.isCancelled) {
			console.log('login is cancelled.');
		} else {
			AccessToken.getCurrentAccessToken().then(
				(data) => {
					this.props.userFacebookAuth(data.accessToken.toString())
				}
			)
		}
	}

	userLogin() {
		if (this.isFormValid()) {
			this.props.userLogin(this.state.email, this.state.password)
		}
	}

	userSignup() {
		if(this.isFormValid()) {
			this.props.userSignup(this.state.email, this.state.password)
		}
	}

	isFormValid() {
		isEmailValid = (/.+@.+/.test(this.state.email))
		isPasswordValid = (this.state.password && this.state.password.length > 7)
		this.setState({
			isEmailValid: isEmailValid,
			isPasswordValid: isPasswordValid
		})
		// Since the state setting doesn't happen immediately, for coherence issues the variables are returned instead of the state
		return (isEmailValid && isPasswordValid)
	}

	render() {
		if (this.props.isLoading) {
			return <Loader />
		} else {
			return (
				<View style={styles.container}>

					<Image
						source={require('../../images/logo.png')}
						style={styles.logo}
						/>
					<Text style={styles.title}> RadiSaclay </Text>

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
						{this.state.isEmailValid === false &&
							<Text style={styles.invalidInput}> Email invalide </Text>
						}
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
						{this.state.isPasswordValid === false &&
							<Text style={styles.invalidInput}> 8 caractères minimum </Text>
						}
						<View style={styles.buttonsContainer}>
							<TouchableOpacity style={styles.buttonWrapperLeft}>
								<Text
									style={styles.buttonText}
									onPress={this.userLogin.bind(this)}
									>
									Log In
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.buttonWrapperRight}>
								<Text
									style={styles.buttonText}
									onPress={this.userSignup.bind(this)}
									>
									Sign Up
								</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.facebookButton}>
							<LoginButton
								readPermissions={['email', 'public_profile']}
								onLoginFinished={(error, result) => this.facebookLogin(error, result)}
							/>
						</View>

					</View>
				</View>
			);
		}
	}
}

Authentication.propTypes = {
	// from redux
	errorMessage: React.PropTypes.string,
	errorRemove: React.PropTypes.func,
	isLoading: React.PropTypes.bool,
	idToken: React.PropTypes.string,
	userLogin: React.PropTypes.func,
	userSignup: React.PropTypes.func,
}

const mapStateToProps = (store) => {
	return {
		errorMessage: store.app.errorMessage,
		idToken: store.user.idToken,
		isLoading: store.user.isLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		errorRemove: () => dispatch(appOperations.errorRemove()),
		userFacebookAuth: (token) => {
			dispatch(userOperations.userFacebookAuth(
				settings.urls.AUTH_FACEBOOK_URL,
				token
			))
		},
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

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
import { ActionConst, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

import styles from './styles';

import promises from '../../config/promises';
import settings from '../../config/settings';
import Loader from '../../components/Loader'
import * as userOperations from '../../operations/userOperations'

class Authentication extends Component {
	constructor(){
		super();
		this.state = {
			email: null,
			password: null
		}
	}

	// TODO: Find a better way to fire the action transition once the authentication has been verified
	componentWillUpdate(nextProps) {
		if(nextProps.idToken) {
			Actions.MainTab({type: ActionConst.REPLACE})
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
			return <Loader />
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

Authentication.propTypes = {
	// from redux
	isLoading: React.PropTypes.bool,
	idToken: React.PropTypes.string,
	userLogin: React.PropTypes.func,
	userSignup: React.PropTypes.func,
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

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
import {
	ActionConst,
	Actions,
} from 'react-native-router-flux';

import styles from './styles';
import settings from '../../config/settings'

class Authentication extends Component {
  constructor(){
    super();
    this.state = {
      email: null,
      password: null
    }
  }

  async onValueChange(item, selectedValue) {
      try {
        await AsyncStorage.setItem(item, selectedValue);
      } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
      }
  }

  authenticateUser(route){
    if (this.state.email && this.state.password){
      fetch(settings.urls.AUTH_URL + route, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.validated){
          this.onValueChange(settings.keys.ID_TOKEN, responseData.token),
					Actions.MainTab({type: ActionConst.REPLACE})
        }
        else{
          Alert.alert(
            "Problème d'authentification",
            responseData.msg
          )
        }
      })
      .done();
    }
  }

  userLogin() {
    this.authenticateUser('login');
  }

  userSignup() {
    this.authenticateUser('signup');
  }

  render() {
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

export default Authentication;

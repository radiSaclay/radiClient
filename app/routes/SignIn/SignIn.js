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

var STORAGE_KEY = 'id_token'

class SignIn extends Component {
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

  userSignup() {
    if (this.state.email && this.state.password){
      fetch(settings.AUTH_URL + "signup", {
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
          this.onValueChange(STORAGE_KEY, responseData.token),
					Actions.MainTab({type: ActionConst.REPLACE})
        }
        else{
          Alert.alert(
            "Inscription pas valide",
            responseData.msg
          )
        }
      })
      .done();
    }
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
							onPress={() => {
								Actions.MainTab({type: ActionConst.REPLACE})
							}}
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

export default SignIn;

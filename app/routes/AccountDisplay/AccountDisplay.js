import React, { Component } from 'react';
import {
	AsyncStorage,
	Image,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import settings from '../../config/settings';
import styles from './styles';

class AccountDisplay extends Component {
	constructor() {
		super();
	}

  async userLogout() {
    try {
      await AsyncStorage.removeItem(settings.keys.ID_TOKEN);
      Actions.Authentication()
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

	render() {
		return (
			<ScrollView style={styles.mainContainer}>
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
				<TouchableOpacity style={styles.buttonWrapper}>
					<Image source={require('../../images/settings.png')} />
					<Text style={styles.buttonText} onPress={() => /* TODO redirect the user to the edit view */ Actions.AccountDisplay()}>
						Modifier
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.buttonWrapper}
					onPress={this.userLogout}
				>
					<Text style={styles.buttonText} >
						Log out
					</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

export default AccountDisplay;

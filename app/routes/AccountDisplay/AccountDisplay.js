import React, { Component } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import settings from '../../config/settings';
import styles from './styles';

import Header from '../../components/Header'

class AccountDisplay extends Component {
	render() {
		return (
			<Header
				menuActions={[
					{
						label: 'Awesome option',
						onPress: function(){Alert.alert('Incredible option')},
					}
				]}
				navigation={{
					source: require('../../images/back.png'),
					onPress: function(){Actions.News()},
				}}
				quickActions={[
					{
						source: require('../../images/settings.png'),
						onPress: function(){Alert.alert('Settings Clicked !')},
					}
				]}
				title={this.props.title}
				>

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
			</Header>
		);
	}
}

export default AccountDisplay;

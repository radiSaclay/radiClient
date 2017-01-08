import React, { Component } from 'react';
import {
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

class SignIn extends Component {
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
						style={styles.inputText}
						editable={true}
						keyboardType='email-address'
						returnKeyType='next'
						autoCapitalize='none'
						autoCorrect={false}
						underlineColorAndroid='transparent'
						placeholder='Username'
					/>
					<TextInput
						style={styles.inputText}
						editable={true}
						keyboardType='default'
						returnKeyType='next'
						autoCapitalize='none'
						autoCorrect={false}
						underlineColorAndroid='transparent'
						secureTextEntry={true}
						placeholder='Password'
					/>

					<TouchableOpacity style={styles.loginButtonWrapper}>
						<Text
							style={styles.loginText}
							onPress={() => {
								Actions.MainTab({type: ActionConst.REPLACE})
							}}
						>
							Log In
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default SignIn;

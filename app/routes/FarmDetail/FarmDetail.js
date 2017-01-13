import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles'

const FarmDetail = (props) => {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.logoContainer}>
				<Image
					source={require('../../images/farm.png')}
					style={styles.logo}
					/>
			</View>

			<Text style={styles.name}>
				{props.name}
			</Text>

			<View style={styles.subtitleContainer}>
				<View style={styles.iconContainer}>
					<Image
						source={require('../../images/farm.png')}
						style={styles.icon}
						/>
				</View>
				<Text style={styles.subtitle}>
					{props.address}
				</Text>
			</View>

			<View style={styles.subtitleContainer}>
				<View style={styles.iconContainer}>
					<Image
						source={require('../../images/phone.png')}
						style={styles.icon}
						/>
				</View>
				<Text style={styles.subtitle}>
					{props.phone}
				</Text>
			</View>

			<View style={styles.subtitleContainer}>
				<View style={styles.iconContainer}>
					<Image
						source={require('../../images/farm.png')}
						style={styles.icon}
						/>
				</View>
				<Text style={styles.subtitle}>
					{props.website}
				</Text>
			</View>

			<TouchableOpacity
				onPress={props.toggleSubscriptionStatus}
				style={styles.buttonWrapper}
				>
				<Text style={styles.buttonText}>
					{props.isSubscribed ? 'Me désabonner' : 'M\'abonner'}
				</Text>
			</TouchableOpacity>
		</View>
	)
}

FarmDetail.propTypes = {
	address: React.PropTypes.string,
	name: React.PropTypes.string,
	phone: React.PropTypes.string,
	toggleSubscriptionStatus: React.PropTypes.func,
	website: React.PropTypes.string,
}

export default FarmDetail

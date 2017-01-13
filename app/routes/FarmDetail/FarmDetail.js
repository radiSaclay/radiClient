import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles'

const FarmDetail = (props) => {
	return (
		<View style={styles.mainContainer}>
			<Text>
				Id: {props.id}
			</Text>

			<Text>
				Nom: {props.name}
			</Text>

			<Text>
				Id propriétaire: {props.ownerId}
			</Text>

			<Text>
				Adresse: {props.address}
			</Text>

			<Text>
				Site web: {props.website}
			</Text>

			<Text>
				Téléphone: {props.phone}
			</Text>

			<Text>
				Mail: {props.email}
			</Text>

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
	email: React.PropTypes.string,
	id: React.PropTypes.number,
	name: React.PropTypes.string,
	ownerId: React.PropTypes.number,
	phone: React.PropTypes.string,
	toggleSubscriptionStatus: React.PropTypes.func,
	website: React.PropTypes.string,
}

export default FarmDetail

import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

/*	ProductDetail receiving props:
	- farms : array
	- isSubscribed : bool
	- name : string
	- toggleSubscriptionStatus : function
*/
const ProductDetail = (props) => {
	return(
		<View style={styles.container}>
			<Text style={styles.name}>
				{props.name}
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

export default ProductDetail

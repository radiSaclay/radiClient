import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

/*	Product receiving props:
	- getProductDetail : function
	- name : string
*/
const Product = (props) => {
	return (
		<TouchableOpacity onPress={props.getProductDetail}>
			<View style={styles.mainContainer}>
				<View style={styles.imageContainer}>
					<Image source={require('../../images/icons/radish.png')} />
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.name}>
						{props.name}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default Product

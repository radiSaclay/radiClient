import React from 'react'
import {
	Image,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'

import styles from './styles'

/*	Farm receiving props:
	- address : string
	- getFarmDetail: function
	- name : string
*/
const Farm = (props) => {
	return (
		<TouchableOpacity onPress={props.getFarmDetail}>
			<View style={styles.mainContainer}>
				<View style={styles.imageContainer}>
					<Image
						source={require('../../images/farm.png')}
						/>
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.name}>
						{props.name}
					</Text>

					<View style={styles.subtitle}>
						<Text style={styles.address}>
							{props.address}
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default Farm;

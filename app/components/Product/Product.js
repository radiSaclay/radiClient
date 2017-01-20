import React from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import styles from './styles';

const Product = (props) => {
	return (
		<TouchableOpacity>
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

Product.propTypes = {
	name: React.PropTypes.string,
}

export default Product

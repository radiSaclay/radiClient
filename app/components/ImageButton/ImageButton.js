import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'

import styles from './styles'

class ImageButton extends Component {
	render() {
		return (
			<TouchableOpacity
				style={styles.mainContainer}
				onPress={this.props.onPress}
				>
				<Image
					source={this.props.source}
					style={styles.image}
					/>
			</TouchableOpacity>
		)
	}
}

ImageButton.propTypes = {
	onPress: React.PropTypes.func,
	source: React.PropTypes.number,
}

export default ImageButton

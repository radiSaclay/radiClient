import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

class ListItem extends Component {

	formatShortDate(timestamp) {
		d = new Date(timestamp*1000);
		return(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear())
	}

	trimDetail(fullDetail) {
		if(fullDetail.length < 50) return fullDetail;
		return(fullDetail.substring(0, 47) + '...')
	}

	render() {
		return (
			<TouchableOpacity onPress={this.props.onTouchCallback}>
				<View style={styles.mainContainer}>
					<View style={styles.imageContainer}>
						<Image
							source={require('../../images/icons/radish.png')}
							style={styles.image}
						/>
					</View>

					<View style={styles.textContainer}>
						<View style={styles.titleContainer}>
							<Text style={styles.title}> {this.props.title} </Text>
							<Text style={styles.date}> {this.props.date && this.formatShortDate(this.props.date)} </Text>
						</View>

						<Text style={styles.subtitle}> {this.props.subtitle}</Text>

						<Text style={styles.detail}> {this.props.detail && this.trimDetail(this.props.detail)}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

ListItem.propTypes = {
	// from parent
	date: React.PropTypes.string,
	detail: React.PropTypes.string,
	onTouchCallback: React.PropTypes.func.isRequired,
	subtitle: React.PropTypes.string,
	title: React.PropTypes.string.isRequired
};

export default ListItem;

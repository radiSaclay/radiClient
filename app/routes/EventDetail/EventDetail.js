import React, { Component } from 'react';
import {Image, ScrollView, Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

class EventDetail extends Component {

	formatShortDate(timestamp) {
		d = new Date(timestamp*1000);
		return(d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear())
	}

	render() {
		const {event} = this.props
		return (
			<ScrollView style={styles.container}>
				<View style={styles.informationContainer}>
					<View style={styles.logoContainer}>
						<Image
							source={require('../../images/farm.png')}
							style={styles.logo}
							/>
					</View>
					<Text style={styles.title}>{event.title}</Text>
					<Text style={styles.description}>{event.description}</Text>

					<View style={styles.subtitleContainer}>
						<View style={styles.iconContainer}>
							<Image
								source={require('../../images/farm.png')}
								style={styles.icon}
								/>
						</View>
						<Text style={styles.subtitle}>{event.farm.name}</Text>
					</View>

					{	(event.beginAt || event.endAt) &&
						<View style={styles.subtitleContainer}>
							<View style={styles.iconContainer}>
								<Image
									source={require('../../images/calender.png')}
									style={styles.icon}
									/>
							</View>
							<View style={styles.datesContainer}>
								{ event.beginAt &&
									<Text style={styles.date}>Début {this.formatShortDate(event.beginAt)}</Text>
								}
								{ event.beginAt && event.endAt &&
									<Text> - </Text>
								}
								{ event.beginAt &&
									<Text style={styles.date}>Fin {this.formatShortDate(event.endAt)}</Text>
								}
							</View>
						</View>
					}

					<TouchableOpacity
						onPress={this.props.togglePinStatus}
						style={styles.buttonWrapper}
						>
						<Text style={styles.buttonText}>
							{this.props.isPinned ? 'Dépingler' : 'Épingler'}
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		)
	}
}

EventDetail.propTypes = {
	// from parent
	togglePinStatus:React.PropTypes.func,
	event: React.PropTypes.object,
	isPinned: React.PropTypes.bool,
}

export default EventDetail;

import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

import styles from './styles';

import EventsListContainer from '../EventsList';

const FarmDetail = (props) => {
	return (
		<View style={styles.mainContainer}>
			<ScrollView>
				<View style={styles.informationContainer}>
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

				<View>
					<ScrollableTabView renderTabBar={() => <DefaultTabBar />} >
						<View tabLabel='Évènements'>
							<EventsListContainer />
						</View>
						<ScrollView tabLabel='Produits'>
							<Text>Voici mes produits</Text>
						</ScrollView>
					</ScrollableTabView>
				</View>
			</ScrollView>
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

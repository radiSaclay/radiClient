import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

import styles from './styles';

// TODO: get the events related to this farm once the root is updated
import EventsListContainer from '../EventsList/EventsListContainer.js';
import ProductsList from '../ProductsList/ProductsList.js'

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
							{ /* TODO: load only events published by the farm */ }
							<EventsListContainer />
						</View>
						<ScrollView tabLabel='Produits'>
							{ /* TODO: load only products published by the farm */ }
							<ProductsList
								isLoading={false}
								onRefresh={()=>{}}
								productsList={props.products}
								/>
						</ScrollView>
					</ScrollableTabView>
				</View>
			</ScrollView>
		</View>
	)
}

FarmDetail.propTypes = {
	// from parent
	address: React.PropTypes.string,
	name: React.PropTypes.string,
	phone: React.PropTypes.string,
	toggleSubscriptionStatus: React.PropTypes.func,
	website: React.PropTypes.string,
}

export default FarmDetail

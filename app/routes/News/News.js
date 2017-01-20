import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles'

import EventContainer from '../../components/Event';
import FarmContainer from '../../components/Farm';

var createEventRow = (event) =>
	<EventContainer
		endDate={event.endAt}
		eventId={event.id}
		key={event.id}
		producer={event.producer}
		title={event.title}
		/>

var createFarmRow = (farm) =>
	<FarmContainer
		address={farm.address}
		id={farm.id}
		key={farm.id}
		name={farm.name}
		/>

const News = (props) => {
	return(
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.newsContainer}>
					<View style={styles.headerContainer}>
						<Text style={styles.headerTitle}>
							Les nouveaux évènements
						</Text>
						<TouchableOpacity
							onPress={props.showEventsList}
							>
							<Text style={styles.headerButton} >
								>
							</Text>
						</TouchableOpacity>
					</View>
					<ScrollView style={{padding: 10}}>
						{props.eventsList.map(createEventRow)}
					</ScrollView>
				</View>

				<View style={styles.newsContainer}>
					<View style={styles.headerContainer}>
						<Text style={styles.headerTitle}>
							Les nouvelles fermes
						</Text>
						<TouchableOpacity
							onPress={props.showFarmsList}
							>
							<Text style={styles.headerButton} >
								>
							</Text>
						</TouchableOpacity>
					</View>
					<ScrollView style={{padding: 10}}>
						{props.farmsList.map(createFarmRow)}
					</ScrollView>
				</View>
			</ScrollView>
		</View>
	)
}

export default News

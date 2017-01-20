import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles'

import EventContainer from '../../components/Event';

var createEventRow = (event) =>
<EventContainer
	endDate={event.endAt}
	eventId={event.id}
	key={event.id}
	producer={event.producer}
	title={event.title}
	/>

const News = (props) => {
	return(
		<View style={styles.container}>
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
		</View>
	)
}

export default News

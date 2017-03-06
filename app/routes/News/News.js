import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles'

import EventContainer from '../../components/Event';
import FarmContainer from '../../components/Farm';
import ProductContainer from '../../components/Product';
import NewsBlock from '../../components/NewsBlock';

var createEventRow = (event) =>
	<EventContainer
		description={event.description}
		endDate={event.endAt}
		eventId={event.id}
		key={event.id}
		farmName={event.farm.name}
		title={event.title}
		/>

var createFarmRow = (farm) =>
	<FarmContainer
		address={farm.address}
		id={farm.id}
		key={farm.id}
		name={farm.name}
		/>

var createProductRow = (product) =>
	<ProductContainer
		id={product.id}
		key={product.id}
		name={product.name}
		/>

const News = (props) => {
	return(
		<View style={styles.container}>
			<ScrollView>
				<NewsBlock
					createNewsRow = {createEventRow}
					showCompleteList = {props.showEventsList}

					headerTitle = {"Les nouveaux Évènements"}
					newsList = {props.eventsList}
					/>

				<NewsBlock
					createNewsRow = {createFarmRow}
					showCompleteList = {props.showFarmsList}

					headerTitle = {"Les nouvelles fermes"}
					newsList = {props.farmsList}
					/>

				<NewsBlock
					createNewsRow = {createProductRow}
					showCompleteList = {props.showProductsList}

					headerTitle = {"Les nouveaux produits"}
					newsList = {props.productsList}
					/>


			</ScrollView>
		</View>
	)
}

export default News

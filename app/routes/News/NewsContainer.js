import React, { Component } from 'react';
import { AsyncStorage, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

import * as newsOperations from '../../operations/newsOperations'

import News from './News.js'

class NewsContainer extends Component {

	componentWillMount(){
		this.props.fetchNews(this.props.idToken)
	}

	showEventsList() {
		Actions.EventsList()
	}

	showFarmsList() {
		Actions.FarmsList()
	}

	showProductsList() {
		Actions.ProductsList()
	}

	render() {
		if (this.props.isLoading) {
			return (
				<ActivityIndicator />
			)
		} else {
			return (
				<News
					showEventsList = {this.showEventsList}
					showFarmsList = {this.showFarmsList}
					showProductsList = {this.showProductsList}

					eventsList = {this.props.featuredEvents}
					farmsList = {this.props.featuredFarms}
					productsList = {this.props.featuredProducts}
					/>
			)
		}
	}
}

const mapStateToProps = (store) => {
	return {
		featuredEvents: store.events.events.slice(0,3),
		featuredFarms: store.farms.farms.slice(0,3),
		featuredProducts: store.products.products.slice(0,3),
		idToken: store.user.idToken,
		isLoading: store.news.isLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchNews: (idToken) => dispatch(newsOperations.newsFetch(idToken))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);

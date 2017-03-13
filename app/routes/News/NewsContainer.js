import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import _ from 'lodash'

import * as newsOperations from '../../operations/newsOperations'

import Loader from '../../components/Loader'

import News from './News'

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
		if (this.props.fetchedAll) {
			return (
				<Loader />
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
		featuredEvents: _.slice(store.events.events, 0, 3),
		featuredFarms: _.slice(store.farms.farms, 0, 3),
		featuredProducts: _.slice(store.products.products, 0, 3),
		fetchedAll: store.news.fetchedAll, // source must be store.news because it must wait for multiple promises to resolve
		idToken: store.user.idToken,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchNews: (idToken) => dispatch(newsOperations.newsFetch(idToken))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);

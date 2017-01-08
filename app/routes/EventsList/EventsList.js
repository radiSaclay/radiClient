import React, { Component } from 'react';
import {
	ListView,
	View
} from 'react-native';

import styles from './styles';

import Event from '../../components/Event'

class EventsList extends Component {
	constructor() {
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(events),
		};
	}

	_renderRow(rowData) {
		return (
			<Event
				daysLeft={rowData.daysLeft}
				producer={rowData.producer}
				product={rowData.product}
			/>
		)
	}

	render(rowData) {
		return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={this._renderRow}
				renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
				style={styles.container}
			/>
		)
	}
}

// TODO: Erase example data once the real data is recovered from the backend server
var events = [
{
	"product": "Radis",
	"producer": "Ferme ENSTA",
	"daysLeft": "3 jours"
},
{
	"product": "Tomate",
	"producer": "Ferme X",
	"daysLeft": "3 jours"
},
{
	"product": "Patate",
	"producer": "Ferme Telecom",
	"daysLeft": "3 jours"
},
{
	"product": "Pomme",
	"producer": "Ferme Mines",
	"daysLeft": "3 jours"
},
{
	"product": "Poire",
	"producer": "Ferme ENSTA",
	"daysLeft": "3 jours"
},
{
	"product": "Tomate",
	"producer": "Ferme ENSIMAG",
	"daysLeft": "3 jours"
},
{
	"product": "Lait",
	"producer": "Ferme Paris-Sud",
	"daysLeft": "3 jours"
},
{
	"product": "Yahourt",
	"producer": "Ferme ENSTA",
	"daysLeft": "3 jours"
},
{
	"product": "Poulet",
	"producer": "Ferme Supaero",
	"daysLeft": "3 jours"
},
];

export default EventsList;

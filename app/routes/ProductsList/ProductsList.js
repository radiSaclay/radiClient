import React, { Component } from 'react';
import { ListView, RefreshControl, View } from 'react-native';

import styles from './styles';

import Product from '../../components/Product';

class ProductsList extends Component {

	renderRow(rowData) {
		return (
			<Product
				id={rowData.id}
				name={rowData.name}
				/>
		)
	}

	render() {
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
		var dataSource = ds.cloneWithRows(this.props.productsList)
		return (
			<View style = {styles.container}>
				<ListView
					dataSource={dataSource}
					renderRow={this.renderRow}
					renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
					refreshControl={
						<RefreshControl
							refreshing={this.props.isLoading}
							onRefresh={this.props.onRefresh}
						/>
					}
				/>
			</View>
		)
	}
}

ProductsList.propTypes = {
	// from parent
	isLoading: React.PropTypes.bool.isRequired,
	onRefresh: React.PropTypes.func.isRequired,
	productsList: React.PropTypes.array.isRequired
}

export default ProductsList

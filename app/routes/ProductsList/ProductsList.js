import React, { Component } from 'react';
import { ListView, View } from 'react-native';

import styles from './styles';

import ProductContainer from '../../components/Product';

class ProductsList extends Component {

	renderRow(rowData) {
		return (
			<ProductContainer
				farms={rowData.farms}
				id={rowData.id}
				name={rowData.name}
				subscribed={rowData.subscribed}
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
					/>
			</View>
		)
	}
}

ProductsList.propTypes = {
	productsList: React.PropTypes.array,
}

export default ProductsList

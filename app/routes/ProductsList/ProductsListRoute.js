import React, { Component } from 'react';
import { View } from 'react-native';

import settings from '../../config/settings';
import styles from './styles';

import Frame from '../../components/Frame';
import ProductsListContainer from './ProductsListContainer';

class ProductsListRoute extends Component {
	render() {
		return (
			<Frame title={this.props.title}>
				<View style={styles.route}>
					<ProductsListContainer/>
				</View>
			</Frame>
		)
	}
}

export default ProductsListRoute;

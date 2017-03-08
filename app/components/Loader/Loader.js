import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './styles.js';

const Loader = () => {
	return(
	<View style={styles.loaderContainer}>
		<ActivityIndicator color='white' size='large' style={styles.loader} />
	</View>
	)
}

export default Loader;

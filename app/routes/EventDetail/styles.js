import { StyleSheet } from 'react-native';
import colors from '../../config/colors'
import metrics from '../../config/metrics'

export default styles = StyleSheet.create({
	container: {
		top: metrics.navBarHeight
	},
	daysLeft: {
		fontSize: 20,
	},
	producer: {
		fontSize: 20,
	},
	product: {
		fontSize: 30,
		fontWeight: 'bold'
	},
});

import { StyleSheet } from 'react-native'
import colors from '../../config/colors'
import metrics from '../../config/metrics'

export default styles = StyleSheet.create({
	container: {
		top: metrics.navBarHeight
	},
	endDate: {
		fontSize: 20,
	},
	farmId: {
		fontSize: 20,
	},
	description: {
		fontSize: 30,
		fontWeight: 'bold'
	},
});

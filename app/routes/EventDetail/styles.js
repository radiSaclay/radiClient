import { StyleSheet } from 'react-native'
import colors from '../../config/colors'
import metrics from '../../config/metrics'

export default styles = StyleSheet.create({
	buttonText: {
		fontSize: 20,
		padding: metrics.basePadding,
		textAlign: 'center'
	},
	buttonWrapper: {
		backgroundColor: colors.coral,
		borderRadius: metrics.borderRadius,
	},
	container: {
		top: metrics.navBarHeight
	},
	description: {
		fontSize: 30,
		fontWeight: 'bold'
	},
	endDate: {
		fontSize: 20,
	},
	farmId: {
		fontSize: 20,
	},
});

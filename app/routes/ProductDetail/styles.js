import { StyleSheet } from 'react-native'
import colors from '../../config/colors'
import metrics from '../../config/metrics'

export default styles = StyleSheet.create({
	buttonText: {
		fontSize: 20,
		padding: metrics.basePadding,
		textAlign: 'center',
	},
	buttonWrapper: {
		backgroundColor: colors.coral,
		borderRadius: metrics.borderRadius,
	},
	container: {
		flex: 1,
	},
	name: {
		fontSize: 30,
		fontWeight: 'bold',
	},
})

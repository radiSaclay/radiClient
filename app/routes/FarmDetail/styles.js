import { StyleSheet } from 'react-native'
import colors from '../../config/colors'
import metrics from '../../config/metrics'

const styles = StyleSheet.create({
	buttonText: {
		fontSize: 20,
		padding: metrics.basePadding,
		textAlign: 'center'
	},
	buttonWrapper: {
		backgroundColor: colors.coral,
		borderRadius: metrics.borderRadius,
	},
	mainContainer: {
		flex: 1,
		top: metrics.navBarHeight,
	},
})

export default styles

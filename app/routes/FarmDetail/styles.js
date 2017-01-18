import { StyleSheet } from 'react-native'
import colors from '../../config/colors'
import metrics from '../../config/metrics'

const styles = StyleSheet.create({
	buttonText: {
		color: colors.white,
		fontSize: 20,
		padding: metrics.basePadding,
		textAlign: 'center'
	},
	buttonWrapper: {
		backgroundColor: colors.greyLight,
		borderRadius: metrics.borderRadius,
		margin: metrics.baseMargin,
		width: 200
	},
	icon: {
		height: 30,
		width: 30,
	},
	iconContainer: {
		alignItems: 'center',
		flex: 0.2
	},
	informationContainer: {
		alignItems: 'center',
	},
	logo: {
		borderRadius: 50,
		height: 100,
		width: 100,
	},
	logoContainer: {
		alignItems: 'center',
		margin: metrics.baseMargin,
		justifyContent: 'center',
	},
	mainContainer: {
		flex: 1,
		top: metrics.navBarHeight,
	},
	name: {
		color: colors.lightGrey,
		fontSize: 30,
	},
	subtitle: {
		flex: 0.8,
		fontSize: 16,
	},
	subtitleContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: metrics.baseMargin
	},
})

export default styles

import { StyleSheet } from 'react-native';
import colors from '../../config/colors'
import metrics from '../../config/metrics'

export default styles = StyleSheet.create({
	buttonText: {
		color: colors.greyLight,
		fontSize: 20,
		padding: metrics.basePadding,
		textAlign: 'center'
	},
	buttonWrapper: {
		backgroundColor: colors.salmonLight,
		borderRadius: metrics.borderRadius,
		marginBottom: metrics.baseMargin
	},
	container: {
		alignItems: 'center',
		backgroundColor: colors.coral,
		flex: 1,
		justifyContent: 'center'
	},
	form: {
		width: metrics.screenWidth*0.9
	},
	inputText: {
		backgroundColor: colors.white,
		borderRadius: metrics.borderRadius,
		color: colors.greyLight,
		marginBottom: metrics.baseMargin,
		padding: metrics.basePadding
	},
	logo: {
		height: metrics.logoHeight,
		width: metrics.logoWidth
	},
	title: {
		color: colors.white,
		fontSize: 40,
		margin: metrics.baseMargin,
		textAlign: 'center'
	},
});

import { StyleSheet } from 'react-native';
import colors from '../../config/colors'
import metrics from '../../config/metrics'

export default styles = StyleSheet.create({
	buttonsContainer: {
		flexDirection: 'row',
		marginTop: metrics.baseMargin,
	},
	buttonText: {
		color: colors.greyLight,
		fontSize: 20,
		padding: metrics.basePadding,
		textAlign: 'center'
	},
	buttonWrapperLeft: {
		flex: 0.5,
		backgroundColor: colors.salmonLight,
		borderRadius: metrics.borderRadius,
		marginRight: metrics.baseMargin/2,
	},
	buttonWrapperRight: {
		backgroundColor: colors.salmonLight,
		borderRadius: metrics.borderRadius,
		flex: 0.5,
		marginLeft: metrics.baseMargin/2,
	},
	container: {
		alignItems: 'stretch',
		backgroundColor: colors.coral,
		flex: 1,
		justifyContent: 'center',
		padding: metrics.basePadding,
	},
	facebookButton:{
		alignItems: 'center',
		marginTop: metrics.baseMargin,
	},
	form: {
		padding: metrics.basePadding,
	},
	inputText: {
		backgroundColor: colors.white,
		borderRadius: metrics.borderRadius,
		color: colors.greyLight,
		marginTop: metrics.baseMargin,
		padding: metrics.basePadding
	},
	invalidInput: {
		color: colors.white,
		fontWeight: 'bold',
	},
	logo: {
		alignSelf: 'center',
		height: metrics.logoHeight,
		width: metrics.logoWidth,
	},
	title: {
		color: colors.white,
		fontSize: 40,
		textAlign: 'center',
	},
});

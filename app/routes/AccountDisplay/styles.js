import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import metrics from '../../config/metrics';

const styles = StyleSheet.create({
	horizontalContainer: {
		flex: 1,
		flexDirection: 'row',
	},
	inputText: {
		backgroundColor: colors.white,
		borderRadius: metrics.borderRadius,
		color: colors.greyLight,
		marginBottom: metrics.baseMargin,
		padding: metrics.basePadding,
		flex: 1,
	},
	loginButtonWrapper: {
		backgroundColor: colors.salmonLight,
		borderRadius: metrics.borderRadius,
		marginBottom: metrics.baseMargin,
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
	},
	loginText: {
		color: colors.greyLight,
		fontSize: 20,
		padding: metrics.basePadding,
		textAlign: 'center'
	},
	mainContainer: {
		top: metrics.navBarHeight,
		backgroundColor: colors.coral,
		padding: metrics.basePadding,
		flex: 1,
	},
});

export default styles;

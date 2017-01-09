import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import metrics from '../../config/metrics';

const styles = StyleSheet.create({
	buttonText: {
		color: colors.greyLight,
		fontSize: 20,
		padding: metrics.basePadding,
		textAlign: 'center'
	},
	buttonWrapper: {
		backgroundColor: colors.salmonLight,
		borderRadius: metrics.borderRadius,
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		marginBottom: metrics.baseMargin,
	},
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
	mainContainer: {
		top: metrics.navBarHeight,
		backgroundColor: colors.coral,
		padding: metrics.basePadding,
		flex: 1,
	},
});

export default styles;

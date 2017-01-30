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
		justifyContent: 'center',
		marginBottom: metrics.baseMargin,
	},
	horizontalContainer: {
		flexDirection: 'row',
	},
	inputText: {
		backgroundColor: colors.white,
		borderRadius: metrics.borderRadius,
		color: colors.greyLight,
		marginBottom: metrics.baseMargin,
		padding: metrics.basePadding,
	},
	mainContainer: {
		backgroundColor: colors.coral,
		flex: 1,
		padding: metrics.basePadding,
	},
});

export default styles;

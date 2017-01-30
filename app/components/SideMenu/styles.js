import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import metrics from '../../config/metrics';

export default styles = StyleSheet.create({
	action: {
		paddingBottom: metrics.basePadding,
		paddingTop: metrics.basePadding,
	},
	actionsContainer: {
		padding: metrics.basePadding,
	},
	mainContainer: {
		backgroundColor: colors.white,
		flex: 1,
		padding: metrics.basePadding,
	},
	profilContainer: {
		padding: metrics.basePadding,
	},
});

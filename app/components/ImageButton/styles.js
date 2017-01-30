import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import metrics from '../../config/metrics';

export default styles = StyleSheet.create({
	image: {
		height: metrics.icons.small,
		width: metrics.icons.small,
	},
	mainContainer: {
		padding: metrics.basePadding,
	},
});

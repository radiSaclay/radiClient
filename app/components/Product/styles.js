import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import metrics from '../../config/metrics';

export default styles = StyleSheet.create({
	imageContainer: {
		marginRight: metrics.baseMargin,
	},
	mainContainer: {
		flex: 1,
		flexDirection: 'row',
	},
	name: {
		fontSize: 30,
		fontWeight: 'bold'
	},
	textContainer: {
		flex: 1,
	},
});

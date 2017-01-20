import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import metrics from '../../config/metrics';

export default styles = StyleSheet.create({
	endDate: {
		fontSize: 20,
		flex: 0.3,
		textAlign: 'right',
	},
	imageContainer: {
		marginRight: metrics.baseMargin,
	},
	mainContainer: {
		flex: 1,
		flexDirection: 'row',
	},
	producer: {
		fontSize: 20,
		flex: 0.7
	},
	subtitle:{
		flex: 1,
		flexDirection: 'row'
	},
	textContainer: {
		flex: 1,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	},
});

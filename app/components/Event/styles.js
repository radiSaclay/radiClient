import { StyleSheet } from 'react-native';
import colors from '../../config/colors'
import metrics from '../../config/metrics'

export default styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: colors.salmonLight,
	},
	imageContainer: {
		marginRight: metrics.baseMargin,
	},
	textContainer: {
		flex: 1,
	},
	daysLeft: {
		fontSize: 20,
		flex: 0.3,
		textAlign: 'right',
	},
	producer: {
		fontSize: 20,
		flex: 0.7
	},
	product: {
		fontSize: 30,
		fontWeight: 'bold'
	},
	subtitle:{
		flex: 1,
		flexDirection: 'row'
	},
});

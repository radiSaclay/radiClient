import { StyleSheet } from 'react-native';
import colors from '../../config/colors'
import metrics from '../../config/metrics'

export default styles = StyleSheet.create({
	address: {
		fontSize: 20,
	},
	imageContainer: {
		marginRight: metrics.baseMargin,
	},
	mainContainer: {
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	name: {
		fontSize: 30,
		fontWeight: 'bold',
	},
	subtitle:{
		flex: 1,
		flexDirection: 'row',
	},
	textContainer: {
		flex: 1,
	},
});

import { StyleSheet } from 'react-native';
import colors from '../../config/colors'
import metrics from '../../config/metrics'

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: metrics.navBarHeight,
		paddingTop: metrics.navBarHeight
	},
	separator: {
		backgroundColor: colors.greyLight,
		flex: 1,
		height: StyleSheet.hairlineWidth,
	},
});

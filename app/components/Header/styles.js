import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import metrics from '../../config/metrics';

export default styles = StyleSheet.create({
	actionsContainer: {
		flex: 0.25,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	headerContainer: {
		alignItems: 'center',
		backgroundColor: colors.white,
		borderBottomColor: colors.greyLight,
		borderBottomWidth: 1,
		flexDirection: 'row',
		height: metrics.navBarHeight,
		paddingLeft: metrics.basePadding,
		paddingRight: metrics.basePadding,
	},
	mainContainer: {
		height: metrics.navBarHeight,
		width: metrics.screenWidth,
	},
	navContainer: {
		flex: 0.25,
		flexDirection: 'row',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	titleContainer: {
		flex: 0.5,
	},
});

import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import metrics from '../../config/metrics';

export default styles = StyleSheet.create({
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
		flex: 1,
	},
	navContainer: {
		flex: 0.25,
		flexDirection: 'row',
	},
	quickActionsContainer: {
		flex: 0.25,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	title: {
		color: colors.black,
		fontSize: 20,
		textAlign: 'center',
	},
	titleContainer: {
		flex: 0.5,
	},
});

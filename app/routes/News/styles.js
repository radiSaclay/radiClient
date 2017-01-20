import { StyleSheet } from 'react-native';
import colors from '../../config/colors'
import metrics from '../../config/metrics'

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: metrics.navBarHeight,
		paddingTop: metrics.navBarHeight
	},
	headerButton: {
		color: colors.white,
		fontSize: 20,
		fontWeight: 'bold',
	},
	headerContainer:{
		backgroundColor: colors.coral,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: metrics.basePadding,
	},
	headerTitle: {
		color: colors.white,
		fontSize: 20,
		fontWeight: 'bold',
	},
	newsContainer: {
		borderColor: colors.coral,
		borderWidth: 1,
		margin: metrics.baseMargin,
	},
});

import { StyleSheet } from 'react-native'
import colors from '../../config/colors'
import metrics from '../../config/metrics'

export default styles = StyleSheet.create({
	buttonText: {
		fontSize: 20,
		padding: metrics.basePadding,
		textAlign: 'center'
	},
	buttonWrapper: {
		backgroundColor: colors.coral,
		borderRadius: metrics.borderRadius,
		margin:metrics.baseMargin,
	},
	container: {
		flex: 1,
		padding: metrics.basePadding,
	},
	date:{
		fontSize: 16,
		textAlign: 'center',
	},
	datesContainer:{
		flex: 0.8,
		flexDirection: 'row',
	},
	description:{
		fontStyle: 'italic',
		marginBottom: metrics.baseMargin,
	},
	icon: {
		height: 30,
		width: 30,
	},
	iconContainer: {
		alignItems: 'center',
		flex: 0.2
	},
	informationContainer: {
		alignItems: 'center',
	},
	logo: {
		borderRadius: 50,
		height: 100,
		width: 100,
	},
	logoContainer: {
		alignItems: 'center',
		margin: metrics.baseMargin,
		justifyContent: 'center',
	},
	subtitle: {
		flex: 0.8,
		fontSize: 16,
	},
	subtitleContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: metrics.baseMargin
	},
	title:{
		fontSize: 30,
		marginBottom: metrics.baseMargin,
	},

});

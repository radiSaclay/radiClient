import { StyleSheet } from 'react-native';

import metrics from '../../config/metrics'

export default styles = StyleSheet.create({
	detail:{
		flex: 1,
		fontSize: 12,
		fontStyle: 'italic'
	},
	date: {
		flex: 0.3,
		fontSize: 12,
		textAlign: 'right',
	},
	image: {
		borderRadius: 30,
		height: 60,
		width: 60,
	},
	imageContainer: {
		alignItems: 'flex-start',
		flex: 0.2,
		justifyContent: 'center',
	},
	mainContainer: {
		flex: 1,
		flexDirection: 'row',
		padding: metrics.basePadding,
	},
	subtitle:{
		flex: 1,
		fontSize: 14,
		fontWeight: 'bold'
	},
	textContainer: {
		flex: 0.8,
	},
	title: {
		flex: 0.7,
		fontSize: 20,
		fontWeight: 'bold'
	},
	titleContainer: {
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row'
	},
});

import { StyleSheet } from 'react-native';

import colors from '../../config/colors'

export default styles = StyleSheet.create({
	loaderContainer: {
		alignItems:'center',
		backgroundColor: colors.coral,
		flex:1,
		flexDirection:'row',
		justifyContent:'center',
	},
	loader: {
		transform: [{scale: 1.5}]
	}
});

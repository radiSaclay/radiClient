import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles.js';

const NewsBlock = (props) => {
	return (
		<View style={styles.newsContainer}>
			<View style={styles.headerContainer}>
				<Text style={styles.headerTitle}>
					{props.headerTitle}
				</Text>
				<TouchableOpacity
					onPress={props.showCompleteList}
					>
					<Text style={styles.headerButton} >
						>
					</Text>
				</TouchableOpacity>
			</View>
			<ScrollView style={{padding: 10}}>
				{props.newsList.map(props.createNewsRow)}
			</ScrollView>
		</View>
	);
}

export default NewsBlock;

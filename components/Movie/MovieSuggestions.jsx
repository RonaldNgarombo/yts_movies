import React from 'react';
import {
	View,
	Text,
	FlatList,
	Image,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

import { NavigationEvents } from 'react-navigation';

const MovieSuggestions = ({ suggestions }) => {
	console.log(suggestions);
	return (
		<View>
			<Text style={styles.suggestion}>Suggestions</Text>
			<FlatList
				data={suggestions}
				renderItem={({ item }) => (
					<View>
						<TouchableOpacity>
							<Image
								source={{ uri: `${item.medium_cover_image}` }}
								style={styles.image}
							/>
						</TouchableOpacity>
						<Text style={styles.title}>{item.title}</Text>
					</View>
				)}
				keyExtractor={item => item.id.toString()}
				horizontal={true}
			/>
		</View>
	);
};

export default MovieSuggestions;

const PRIMARY_COLOR = '#ffa500';
const SECONDARY_COLOR = '#fe6e00';
const TERTIARY_COLOR = '#ffffff';

const styles = StyleSheet.create({
	suggestion: {
		color: '#fff',
		fontSize: 20,
		fontStyle: 'italic',
		marginTop: 30
	},

	image: {
		height: 200,
		width: 200,
		marginRight: 20,
		marginTop: 5
	},

	title: {
		color: PRIMARY_COLOR,
		fontSize: 20,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		flex: 1
	}
});

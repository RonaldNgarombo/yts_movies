import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const Genres = ({ genres }) => {
	return (
		<View style={styles.genreContainer}>
			<Text style={styles.genresTitle}>Genres</Text>
			<FlatList
				data={genres}
				renderItem={({ item }) => (
					<Text style={styles.genre}>{item}</Text>
				)}
				keyExtractor={(item, index) => index.toString()}
				horizontal={true}
			/>
		</View>
	);
};

const PRIMARY_COLOR = '#ffa500';
const SECONDARY_COLOR = '#fe6e00';
const TERTIARY_COLOR = '#ffffff';

const styles = StyleSheet.create({
	genresTitle: {
		fontSize: 20,
		color: TERTIARY_COLOR,
		fontStyle: 'italic',
		marginBottom: 5,
		marginTop: 30
	},

	genreContainer: {
		// flex: 1
	},

	genre: {
		color: SECONDARY_COLOR,
		fontSize: 18,
		marginBottom: 30,
		marginRight: 10,
		flex: 1,
		borderColor: PRIMARY_COLOR,
		borderWidth: 1,
		padding: 5,
		borderRadius: 10
	}
});

export default Genres;

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieInfo = ({ movie }) => {
	return (
		<View style={styles.container}>
			<View style={{ flex: 1 }}>
				<Image
					style={styles.image}
					source={{ uri: `${movie.medium_cover_image}` }}
				/>
			</View>

			<View style={{ flex: 1 }}>
				<Text style={styles.title}>{movie.title} </Text>
				<Text style={styles.infoText}>Year: {movie.year} </Text>
				<Text style={styles.infoText}>Rating: {movie.rating} </Text>
				<Text style={styles.infoText}>Runtime: {movie.runtime} </Text>
			</View>
		</View>
	);
};

export default MovieInfo;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		marginBottom: 10
	},
	image: {
		borderRadius: 10,
		width: 200,
		height: 200
	},
	title: {
		color: '#ffffff',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10
	},
	infoText: {
		color: '#ffa500',
		fontSize: 16
		// flex: 1
	}
});

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MovieInfo = ({ movie, navigate }) => {
	return (
		<View style={styles.container}>
			<View style={{ flex: 1 }}>
				<TouchableOpacity
					onPress={() =>
						navigate('MovieDetails', {
							movieId: movie.id,
							movieTitle: movie.title
						})
					}
				>
					<Image
						style={styles.image}
						source={{ uri: `${movie.medium_cover_image}` }}
					/>
				</TouchableOpacity>
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
		marginBottom: 10,
		marginTop: 5
	},
	image: {
		borderRadius: 5,
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

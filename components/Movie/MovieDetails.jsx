import React from 'react';
import { View, Text } from 'react-native';

const MovieDetails = ({ movieId }) => {
	return (
		<View>
			<Text>Movie Details</Text>
			<Text>The movie id is {movieId} </Text>
		</View>
	);
};

export default MovieDetails;

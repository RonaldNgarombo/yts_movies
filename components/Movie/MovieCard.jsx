import React from 'react';
import { View } from 'react-native';
// Importing the components
import MovieInfo from './MovieInfo';

const MovieCard = ({ movie }) => {
	// console.log(movies.length);
	console.log(movie.id);

	return (
		<View>
			<MovieInfo movie={movie} />
		</View>
	);
};

export default MovieCard;

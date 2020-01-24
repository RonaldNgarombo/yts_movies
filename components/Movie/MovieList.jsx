import React from 'react';
import { View, FlatList, Text } from 'react-native';
import MovieInfo from './MovieInfo';

const MovieList = ({ movies }) => {
	// console.log(movies.length);
	// console.log(movies);
	return (
		<View>
			<FlatList
				data={movies}
				renderItem={({ item }) => <MovieInfo movie={item} />}
				keyExtractor={item => item.id.toString()}
			/>
		</View>
	);
};

export default MovieList;

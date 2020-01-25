import React from 'react';
import { View, FlatList, Text } from 'react-native';
import MovieInfo from './MovieInfo';

const MovieList = ({ movies, navigate }) => {
	// console.log(movies.length);
	// console.log(movies);
	return (
		<View>
			<FlatList
				data={movies}
				renderItem={({ item }) => (
					<MovieInfo navigate={navigate} movie={item} />
				)}
				keyExtractor={item => item.id.toString()}
			/>
		</View>
	);
};

export default MovieList;

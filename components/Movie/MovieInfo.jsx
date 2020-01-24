import React from 'react';
import { View, Text, Image } from 'react-native';

const MovieInfo = ({ movie }) => {
	return (
		<View>
			<Text>{movie.title} </Text>
			<Text>{movie.year} </Text>
			<Text>{movie.rating} </Text>
			<Text>{movie.runtime} </Text>
			<Image
				style={{ width: 200, height: 200 }}
				source={{ uri: `${movie.medium_cover_image}` }}
			/>
		</View>
	);
};

export default MovieInfo;

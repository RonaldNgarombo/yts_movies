import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import axios from 'axios';

import MovieDescription from './MovieDescription';

// Get dummy data
import single_data from '../../SINGLE_DATA';

const MovieDetails = ({ movieId }) => {
	const [movieData, setMovieData] = useState([]);

	const URL = `https://yts.lt/api/v2/movie_details.json?movie_id=${movieId}&with_images=true&with_cast=true`;

	useEffect(() => {
		const getMovieDetails = async () => {
			try {
				const response = await axios.get(URL);
				// console.log(response.data.data.movie);

				// const { movie } = response.data.data;
				// setMovieData(movie);

				// console.log(single_data);
				setMovieData(single_data.data.movie);
			} catch (error) {
				if (error == 'Error: Network Error') {
					Alert.alert(
						`Network error`,
						`Please connect to internet and try again`
					);
				} else {
					alert(`An error occurred`);
				}
			}
		};
		getMovieDetails();
	});

	// console.log(movieData);
	return (
		<View>
			{movieData.length === 0 ? (
				<ActivityIndicator />
			) : (
				<MovieDescription movie={movieData} />
			)}
		</View>
	);
};

export default MovieDetails;

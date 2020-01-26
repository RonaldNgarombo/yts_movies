import React, { useState, useEffect, Fragment } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import axios from 'axios';

import MovieDescription from './MovieDescription';
import MovieSuggestions from './MovieSuggestions';

// Get dummy data
import single_data from '../../SINGLE_DATA';

const MovieDetails = ({ movieId }) => {
	const [movieData, setMovieData] = useState([]);

	const [movieSuggestions, setMovieSuggestions] = useState([]);

	const URL = `https://yts.lt/api/v2/movie_details.json?movie_id=${movieId}&with_images=true&with_cast=true`;

	const SUG_URL = `https://yts.lt/api/v2/movie_suggestions.json?movie_id=${movieId}`;

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

		// Get Movie Suggestions
		const getMovieSuggestions = async () => {
			const response = await axios.get(SUG_URL);

			const { movies } = response.data.data;
			setMovieSuggestions(movies);
		};

		getMovieDetails();
		getMovieSuggestions();
	});

	// console.log(movieSuggestions);
	return (
		<View>
			{movieData.length === 0 ? (
				<ActivityIndicator />
			) : (
				<MovieDescription
					movie={movieData}
					suggestions={movieSuggestions}
				/>
			)}
		</View>
	);
};

export default MovieDetails;

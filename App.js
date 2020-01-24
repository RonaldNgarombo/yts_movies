import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import axios from 'axios';

// Import the movieList component
import MovieList from './components/Movie/MovieList';

// Dummy Data
import movie_data from './MOVIE_DATA';

export default function App() {
	const [movieList, setMovies] = useState([]);

	useEffect(() => {
		const url = `https://yts.lt/api/v2/list_movies.json`;

		const getMovies = async () => {
			try {
				// const response = await axios.get(url);

				// let movies = response.data.data.movies;

				// setMovies(movies);

				// console.log(movie_data.data.movies);
				setMovies(movie_data.data.movies);
			} catch (error) {
				if (error == 'Error: Network Error') {
					Alert.alert(
						`Network error`,
						`Please connect to internet and try again`
					);
				}

				console.log(`An error occurred: ${error}`);
			}
		};

		getMovies();
	});

	return (
		<View style={styles.container}>
			<Text>Showing App.js</Text>
			<MovieList movies={movieList} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000'
		// alignItems: 'center',
		// justifyContent: 'center'
	}
});

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import axios from 'axios';

// Import the movieList component
import MovieList from './components/Movie/MovieList';

export default function App() {
	const [movieList, setMovies] = useState([]);

	useEffect(() => {
		const url = `https://yts.lt/api/v2/list_movies.json`;

		const getMovies = async () => {
			try {
				// abortController = new AbortController();

				const response = await axios.get(url);

				let movies = response.data.data.movies;

				setMovies(movies);

				() => {
					// abortController.abort(response);
					// axios.isCancel(url);
				};
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
		backgroundColor: '#fe6e00',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

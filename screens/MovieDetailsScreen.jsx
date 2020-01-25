import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Importing the movie Details Component
import MovieDetails from '../components/Movie/MovieDetails';

export default class MovieDetailsScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('movieTitle', 'Details')
		};
	};

	render(props) {
		const { navigation } = this.props;
		return (
			<View style={{ flex: 1 }}>
				<MovieDetails
					movieId={navigation.getParam('movieId', 'No ID Passed')}
				/>
			</View>
		);
	}
}

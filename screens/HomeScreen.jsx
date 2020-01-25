import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

// Importing the Movie Component
import Movie from '../components/Movie/Movie';

export default class HomeScreen extends Component {
	static navigationOptions = {
		title: 'YTS Movies'
	};

	render(props) {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>
				<Movie navigate={navigate} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000'
	}
});

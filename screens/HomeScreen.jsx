import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HomeScreen extends Component {
	render(props) {
		const { navigate } = this.props.navigation;

		return (
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Text onPress={() => navigate('MovieDetails')}>
					Home Screen!
				</Text>
			</View>
		);
	}
}

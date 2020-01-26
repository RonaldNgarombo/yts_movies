import React from 'react';
import {
	View,
	FlatList,
	Text,
	Image,
	StyleSheet,
	ScrollView
} from 'react-native';

const Cast = ({ cast }) => {
	return (
		<View>
			<Text style={styles.castTitle}>Movie Cast</Text>

			<ScrollView horizontal="true">
				<FlatList
					data={cast}
					renderItem={({ item }) => (
						<View style={styles.castContainer}>
							<Image
								source={{ uri: `${item.url_small_image}` }}
								style={styles.characterImage}
							/>
							<Text style={styles.name}>{item.name}</Text>
							<Text style={styles.characterName}>
								{item.character_name}
							</Text>
						</View>
					)}
					keyExtractor={(item, index) => index.toString()}
					horizontal={true}
				/>
			</ScrollView>
		</View>
	);
};

const PRIMARY_COLOR = '#ffa500';
const SECONDARY_COLOR = '#fe6e00';
const TERTIARY_COLOR = '#ffffff';

const styles = StyleSheet.create({
	castTitle: {
		fontSize: 20,
		color: TERTIARY_COLOR,
		fontStyle: 'italic',
		marginBottom: 5
	},

	castContainer: {
		// backgroundColor: PRIMARY_COLOR
		marginRight: 20,
		marginBottom: 30,
		paddingLeft: 15,
		alignItems: 'center',
		justifyContent: 'center'
	},

	characterImage: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginRight: 12
	},

	name: {
		color: PRIMARY_COLOR,
		fontSize: 18,
		fontWeight: 'bold'
	},

	characterName: {
		color: TERTIARY_COLOR
	}
});

export default Cast;

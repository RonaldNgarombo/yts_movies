import React from 'react';
import {
	View,
	Image,
	ImageBackground,
	Text,
	FlatList,
	ScrollView,
	StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import Components
import Cast from './Cast';
import Genres from './Genres';

const MovieDescription = ({ movie }) => {
	return (
		<ScrollView
			style={{
				backgroundColor: '#000000',
				paddingRight: 8,
				paddingLeft: 8
			}}
		>
			<ImageBackground
				source={{ uri: `${movie.background_image}` }}
				style={{ width: '100%', height: 300 }}
			>
				<View style={{ flex: 1, flexDirection: 'row' }}>
					{/* <Image
						source={{ uri: `${movie.medium_cover_image}` }}
						style={{
							flex: 1,
							width: 200,
							height: 200,
							// marginTop: '30%',
							borderRadius: 5,
							marginLeft: 5
						}}
					/> */}
				</View>
			</ImageBackground>

			<Text style={styles.title}>{movie.title}</Text>

			<View style={{ flex: 1, flexDirection: 'row' }}>
				<Text style={styles.infoText}>{movie.year}</Text>

				<Text style={styles.infoText}>
					<Ionicons name="md-star-outline" size={20} />
					{movie.rating}
				</Text>

				<Text style={styles.infoText}>
					<Ionicons name="md-time" size={20} />
					{movie.runtime} mins
				</Text>
			</View>

			<View style={{ flex: 1, flexDirection: 'row' }}>
				<Text style={styles.infoText}>{movie.language}</Text>

				<Text style={styles.infoText}>{movie.mpa_rating}</Text>

				<Text style={styles.infoText}>
					<Ionicons name="md-heart" size={20} />
					{movie.like_count}
				</Text>
			</View>

			<Genres genres={movie.genres} />

			<Cast cast={movie.cast} />

			<View>
				<Text style={styles.galleryHeading}>Synopsis</Text>
				<Text style={styles.synopsis}>{movie.description_full}</Text>
			</View>

			<View>
				<Text style={styles.galleryHeading}>Photo gallery</Text>

				<ScrollView style={styles.galleryContainer} horizontal="true">
					<Image
						source={{ uri: `${movie.medium_screenshot_image1}` }}
						style={styles.galleryPhotos}
					/>

					<Image
						source={{ uri: `${movie.medium_screenshot_image2}` }}
						style={styles.galleryPhotos}
					/>

					<Image
						source={{ uri: `${movie.medium_screenshot_image3}` }}
						style={styles.galleryPhotos}
					/>
				</ScrollView>
			</View>
		</ScrollView>
	);
};

const PRIMARY_COLOR = '#ffa500';
const SECONDARY_COLOR = '#fe6e00';
const TERTIARY_COLOR = '#ffffff';

const styles = StyleSheet.create({
	title: {
		flex: 1,
		fontSize: 30,
		fontWeight: 'bold',
		marginTop: 20,
		color: PRIMARY_COLOR
	},

	infoText: { fontSize: 18, color: SECONDARY_COLOR, flex: 1 },

	synopsis: {
		color: SECONDARY_COLOR,
		marginBottom: 30
	},

	galleryContainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: PRIMARY_COLOR
	},

	galleryHeading: {
		color: TERTIARY_COLOR,
		fontSize: 20,
		fontStyle: 'italic',
		marginBottom: 5
	},

	galleryPhotos: {
		height: 200,
		width: 300,
		// flex: 1,
		// marginLeft: 5,
		marginRight: 10
	}
});

export default MovieDescription;

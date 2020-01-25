import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import { Ionicons } from '@expo/vector-icons';

// Importing Screens
import HomeScreen from './screens/HomeScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import SearchMovieScreen from './screens/SearchMovieScreen';

// CONSTATNTS
const PRIMARY_COLOR = '#fe6e00';
const SECONDARY_COLOR = '#ffa500';
const TERTIARY = '#ffffff';

// The Home Stack that refers to the Home tab button
const HomeStack = createStackNavigator(
	{
		Home: HomeScreen,
		MovieDetails: MovieDetailsScreen
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: PRIMARY_COLOR
			},
			headerTintColor: '#ffffff',
			headerTitleStyle: {
				// fontWeight: 'bold',
				fontStyle: 'italic'
			}
		}
	}
);

// The Search Stack that refers to the Search tab button
const SearchStack = createStackNavigator(
	{
		MovieSearch: SearchMovieScreen
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: PRIMARY_COLOR
			},
			headerTintColor: '#ffffff',
			headerTitleStyle: {
				// fontWeight: 'bold',
				fontStyle: 'italic'
			}
		}
	}
);

// The Tab that appears at the bottom of the screen
const TabNavigator = createBottomTabNavigator(
	{
		// Each key references a navigation stack
		Home: HomeStack,
		Search: SearchStack
	},
	{
		// The initial route when that app first loads
		initialRouteName: 'Home',

		// Default configurations for the bottom navigation tab
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				// Get current route from navigation.state
				const { routeName } = navigation.state;

				// Get icon components from @expo/vectoricons
				let IconComponent = Ionicons;
				let iconName;

				// According to the route display the icon
				if (routeName === 'Home') {
					// iconName = focused ? 'md-home' : 'md-home-outline';
					iconName = 'md-home';

					// Sometimes we want to add badges to some icons.
					// You can check the implementation below.
					// IconComponent = HomeIconWithBadge;
				} else if (routeName === 'Search') {
					iconName = 'md-search';
				}

				// You can return any component that you like here!
				return (
					<IconComponent
						name={iconName}
						size={25}
						color={tintColor}
					/>
				);
			}
		}),
		tabBarOptions: {
			// Set colors for the bottom tab icons
			activeTintColor: PRIMARY_COLOR,
			inactiveTintColor: 'gray'
		}
	}
);

export default createAppContainer(TabNavigator);

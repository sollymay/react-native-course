/**
 * @format
 */

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
		<View>
			<Header headerText={'Albums'} />
			<AlbumList />
        </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);

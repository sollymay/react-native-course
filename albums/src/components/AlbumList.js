import React, { Component } from 'react';
// scrollview allows me to make the AlbumList scrollable
import { ScrollView } from 'react-native';
// axios is a third party library to do http/s requests
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	// in order to set initial state, we use a class level prop
	// (declared outside methods but inside class)
	state = { albums: [] };

	// we use componentWillMount as a data fetching point (will load before rendering AlbumList view)
	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data }));
	}

	renderAlbums() {
		// map function kinda does the for i in albums (you need a big arrow function)
		// logic is: single item => what you want to do with single item in JSX
		return this.state.albums.map(album =>
				<AlbumDetail key={album.title} album={album} />
			);
	}
	render() {
		console.log(this.state);
		return (
			<ScrollView>
				{ this.renderAlbums() }
			</ScrollView>
		);
	}
}

export default AlbumList;

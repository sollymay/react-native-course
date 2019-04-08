import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
class App extends Component {

	componentWillMount() {
		firebase.initializeApp(
			{
				apiKey: 'AIzaSyCw5mS9bcL7GtG8pPhiOVbqnTSL7A0KnVs',
				authDomain: 'authentication-d97b7.firebaseapp.com',
				databaseURL: 'https://authentication-d97b7.firebaseio.com',
				projectId: 'authentication-d97b7',
				storageBucket: 'authentication-d97b7.appspot.com',
				messagingSenderId: '424625145119'
			  }
		);
	}
	render() {
		return (
				<View>
					<Header headerText="Authentication" />
					<LoginForm />
				</View>

			);
	}
}

export default App;
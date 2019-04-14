import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
class App extends Component {
	state = { loggedIn: null };

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

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {

		switch (this.state.loggedIn) {
			case true:
				return (
					<Button onPress={() => firebase.auth().signOut()}>
						Log out
					</Button>
				);
			case false:
				return <LoginForm />;
			default:
				return
				<View>
					<Spinner size="large"/>
				</View>
		}
	}
	render() {
		return (
				<View>
					<Header headerText="Authentication" />
					{this.renderContent()}
				</View>
			);
	}
}

export default App;
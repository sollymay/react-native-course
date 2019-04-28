import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentDidMount() {
        const config = {
            apiKey: 'AIzaSyAqX3trgqlvOaSV3LuWsoQlcgC5rf7ZP9Q',
            authDomain: 'manager-9c122.firebaseapp.com',
            databaseURL: 'https://manager-9c122.firebaseio.com',
            projectId: 'manager-9c122',
            storageBucket: 'manager-9c122.appspot.com',
            messagingSenderId: '851075878729'
          };
          firebase.initializeApp(config);
    }
    render() {
          const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
          return (
          <Provider store={store}>
              <Router />
          </Provider>
        );
    }
}

export default App;

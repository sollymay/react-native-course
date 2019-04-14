import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
// provider holds state for store....
const App = () => {
    return (
        <Provider store ={createStore(reducers)}>
            <View />
        </Provider>
  );
}

export default App;

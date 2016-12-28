import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAnUtG9KMKwk6Cr1kBQVx6R0aZgSPgvgUs',
      authDomain: 'manager-c2639.firebaseapp.com',
      databaseURL: 'https://manager-c2639.firebaseio.com',
      storageBucket: 'manager-c2639.appspot.com',
      messagingSenderId: '1089625461995'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;

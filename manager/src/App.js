import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDXFw4-ICL7cvI_v-PZOgEu9F5p8StLYp0',
      authDomain: 'managers-1ff1c.firebaseapp.com',
      databaseURL: 'https://managers-1ff1c.firebaseio.com',
      storageBucket: 'managers-1ff1c.appspot.com',
      messagingSenderId: '932690794387'
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

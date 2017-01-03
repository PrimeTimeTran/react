import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router'

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

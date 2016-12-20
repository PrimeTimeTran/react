import React, { Component } from 'react';
import { View } from 'react-native';
// Creates Database
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  // Initialize Firebase DB for use as the backend
  componentWillMount() {
    
    // Connect to a specific project we created
    firebase.initializeApp({
    apiKey: 'AIzaSyCYtj_TxdWyVhwr42TT-Q9pvniNZpFRN9c',
    authDomain: 'authentication-888a9.firebaseapp.com',
    databaseURL: 'https://authentication-888a9.firebaseio.com',
    storageBucket: 'authentication-888a9.appspot.com',
    messagingSenderId: '682620572715'
    });

    // Watching the state of the user and deciding what to render
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  // Callback to render depending on the state
  renderContent () {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <View><Spinner size="large" /></View>;
      }
    }

  // Rendering the HomePage
  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

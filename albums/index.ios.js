// Index.ios.js - iOS development file

// Imports libraries to help us create component
import React from 'react';
import { AppRegistry, View } from 'react-native';

// Imports custom components that we've written
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Creates a Component
const App = () => (
  <View>
    {/* Calls Header component and passes property of headerText to the child component */}
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Renders it to the device. Tells React native to take this component and render it on the device
// Only the 'root' component uses 'AppRegistry'
// Only used in this file. It decides what to show the user
AppRegistry.registerComponent('albums', () => App);

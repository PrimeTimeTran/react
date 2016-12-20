import React, { Component } from 'react';
import { Text, View, StyleSheet, AppRegistry, Image, backgroundImage, backdrop, backdropView } from 'react-native';
import clrs from '../app/utils/clrs';

export default class Root extends Component {
  render() {
    return (
      <Text>React.Js</Text>
    )
}

AppRegistry.registerComponent('Root', () => Root);

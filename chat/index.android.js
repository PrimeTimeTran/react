import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

import Index from './app/components/index';
export default class chat extends Component {
  render() {
    return (
      <Index />
    );
  }
}

AppRegistry.registerComponent('chat', () => chat);

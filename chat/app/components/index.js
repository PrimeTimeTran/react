import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableOpacity } from 'react-native';
import { Router, Scene, Action } from 'react-native-router-flux';

import Homepage from './homepage';
import Social from './social';
import Chatroom from './chatroom';
import Loi from './loi';
import Pinterest from './pinterest';

const TabIcon = ({ selected, title}) => {
  return (
      <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
  );
};

const App = () => {
  return (
    <Router>
      <Scene key="homepage" component={Homepage} title="Homepage" initial />
      <Scene key="social" component={Social} title="Social" />
      <Scene key="chatroom" component={Chatroom} title="Chatroom" />
      <Scene key="loi" component={Loi} title="PrimeTimeTran" />
    </Router>
    /* <Router>
      <Scene key="root">
        <Scene key="tabbar" tabs tabBarStyle={{ backgroundColor: '#FFFFFF'}} >

          <Scene key="Scene1" title="Home" icon={TabIcon}>
            <Scene key="homepage" component={Homepage} title="Homepage" initial />
            <Scene key="social" component={Social} title="Social" />
            <Scene key="chatroom" component={Chatroom} title="Chatroom" />
            <Scene key="loi" component={Loi} title="PrimeTimeTran" />
          </Scene>

          <Scene key="Pinterest" title="Pinterest" icon={TabIcon}>
            <Scene key="Hm" component={Pinterest} title="Profile" initial />
          </Scene>

          <Scene key="Scene3" title="Three" icon={TabIcon}>
            <Scene key="Loi" component={Loi} title="Profile" initial />
          </Scene>

          <Scene key="Scene4" title="Four" icon={TabIcon}>
            <Scene key="Loi" component={Loi} title="Profile" initial />
          </Scene>

        </Scene>
      </Scene>
    </Router> */
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'gray',
    },
    Name: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
    },
    TextInput:{
      fontSize: 20,
      height: 40,
      margin: 20,
      borderWidth: 2,
      borderColor: "black",
      paddingLeft: 5,
    },
    buttonText: {
      marginLeft: 20,
      fontSize: 20,
    }
  });

export default App;

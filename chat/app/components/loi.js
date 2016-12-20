import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Loi = () => {
  return (
    <View style={ styles.wrapper }>
      <View style={ styles.titleWrapper }>
        <Text style={ styles.title } onPress={() => Actions.chatroom()}>Loi Tran</Text>
      </View>
      <View>
        <Text style={ styles.textPara }>www.PrimeTimeTran.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, // Fills container
    backgroundColor: 'black', // Colors Background
    justifyContent: 'center', // Centers Vertically
    alignItems: 'center', // Centers Horizontally
  },

  title: {
    fontSize: 60, // Size of Font
    color: 'white', // Color of Text
    fontWeight: 'bold', // Text Weight
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  textPara: {
    color: 'black',
    paddingBottom: 20,
  },

});

export default Loi;

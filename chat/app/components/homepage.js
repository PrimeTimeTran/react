import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Homepage = () => {
  return (
    <View style={ styles.wrapper }>

      <View style={ styles.header }>
        <Text style={ styles.headerText }>
          Hello World!
        </Text>
      </View>

      <View style={ styles.top }>
        <View style={ styles.titleWrapper }>
          <Text style={ styles.title } onPress={() => Actions.social()}>Hello World from iOS & Android</Text>
        </View>
      </View>

      <View style={ styles.bottom }>
        <Text style={ styles.textPara }>
          A PrimeTimeProduction
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, // Fills entire container
    flexDirection: 'column', // Divides container vertically
    backgroundColor: 'skyblue', // Colors Background
    justifyContent: 'center', // Aligns contents center
  },

  header: {
    flex: 1,
    backgroundColor: 'lightgray',
    flexDirection: 'row', // Makes container horizontally divided
    alignItems: 'flex-end', // Makes the Content of the header stick to the bottom.
  },

  headerText: {
    flex: 1,
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
  },

  top: {
    flex: 4, // Fills container
    backgroundColor: 'white', // Colors Background
    alignItems: 'center', // Centers Horizontally
    borderRadius: 6,
  },

  bottom:{
    flex: 1,
    alignItems: 'center', // Centers Horizontally
  },

  title: {
    fontSize: 60, // Size of Font
    color: 'black', // Color of Text
    fontWeight: 'bold', // Text Weight
    textAlign: 'center',
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  textPara: {
    color: 'black',
    marginTop: 40,
  },
});

export default Homepage;

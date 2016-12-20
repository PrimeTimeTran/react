import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Pinterest = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>

        <View style={styles.nav}>

        </View>
        
        <View style={styles.pinButtonContainer}>
          <View style={styles.pinButton}>
          </View>
          <Text style={styles.pinButtonText}>
          </Text>
        </View>

      </View>

      <View style={styles.image}>

      </View>

      <Text></Text>
      <View></View>
      <View></View>
    </View>


      );
      }

      const styles = StyleSheet.create({
        wrapper: {
    flex: 1, // Fills entire container
    flexDirection: 'column', // Divides container vertically
    justifyContent: 'center', // Aligns contents center
  },
});

export default Pinterest;

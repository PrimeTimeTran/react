import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Container = () => (
  <View style={styles.container}>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Aligns vertically
    alignItems: 'center', // Aligns horizontally
    backgroundColor: '#F8F8F8',
  },
});

export default Container

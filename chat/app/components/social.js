import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Social extends React.Component {
  state = {
    name: ''
  }
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.Name }>
          Enter your Name:
        </Text>

        <TextInput
          style={ styles.TextInput }
          placeholder='PrimeTimeTran'
          onChangeText={(text) => {
            this.setState({
              name: text,
            });
          }}
          value={this.state.name}
        />
        <TouchableOpacity
          onPress={() => {
            Actions.chatroom({
              name: this.state.name,
            })
          }}
        >
          <Text style={ styles.buttonText }>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

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

export default Social;

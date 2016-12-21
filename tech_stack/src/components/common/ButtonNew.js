// Class Button

import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends Component {

  render () {
    return(
    <TouchableOpacity style={[styles.buttonStyle, this.props.style]} onPress={this.props.onPress} >
      <Text style={styles.textStyle}>
        {this.props.children}
      </Text>
    </TouchableOpacity>
  );
  }
};

Button.propTypes = {
  styles: PropTypes.object,
  onPress: PropTypes.func,
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
   flex: 1,
   alignSelf: 'stretch',
   backgroundColor: '#fff',
   borderRadius: 5,
   borderWidth: 1,
   borderColor: '#007aff',
   marginLeft: 5,
   marginRight: 5,
  }
};
export { Button };

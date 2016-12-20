// Import libraries for making a Component
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Make a component
const Header = (props) => (
    <View style={styles.header}>
      {/* Parent must provide a property for this */}
      <Text style={styles.headerText}>
        {props.headerText}
      </Text>
    </View>
);

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center', // Aligns vertically
                              // 'flex-end', 'center', 'flex-start'
    alignItems: 'center',     // Aligns horizontally
                              // 'flex-end', 'center', 'flex-start'
    backgroundColor: '#F8F8F8',
    paddingTop: 15,
    height: 60,

    // Makes the shadow beneath the header
    shadowColor: 'black',
    shadowOffset: { with: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  // Header Text
  headerText: {
    fontSize: 20,
    fontFamily: 'Arial',
  }
});

// Make the component available to other parts of the app
export default Header;

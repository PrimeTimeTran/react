import React from 'react';

import { GiftedChat } from 'react-native-gifted-chat';
import { View, StyleSheet } from 'react-native';
import Backend from './Backend';

export default class Chatroom extends React.Component {
  state = {
    messages: [],
  };
  componentWillMount() {

  }
  render() {
    return (
      <View style={ styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={(message) => {
            Backend.sendMessage(message);
          }}
          user={{
            _id: Backend.getUid(),
            name: this.props.name,
          }}
        />
      </View>
    );
  }
  componentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
    Backend.closeChat();
  }
}

Chatroom.defaultProps = {
  name: 'John Smith',
};

Chatroom.propTypes = {
  name: React.PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
});

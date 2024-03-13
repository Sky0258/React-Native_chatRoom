import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Icon } from '@rneui/themed';

const ChatBubble = ({ message, isMyMessage, userAvatar }) => {
  const bubbleStyle = isMyMessage ? styles.myBubble : styles.otherBubble;
  const textColor = isMyMessage ? 'white' : 'black';
  const backgroundColor = isMyMessage ? '#FF3B30' : '#34C759';

  return (
    <View style={styles.bubbleContainer}>
      {isMyMessage ? null : <Image source={userAvatar} style={styles.avatar} />}
      <View style={[styles.messageContainer, isMyMessage ? styles.myMessageContainer : styles.otherMessageContainer]}>
        <View style={[styles.bubble, bubbleStyle, { backgroundColor }]}>
          <Text style={[styles.messageText, { color: textColor }]}>{message}</Text>
        </View>
      </View>
      {isMyMessage ? <Image source={userAvatar} style={styles.avatar} /> : null}
    </View>
  );
};

const ChatScreen = () => {
  const [inputText, setInputText] = React.useState('');

  const handleSend = () => {
    if (inputText) {
      console.log(inputText);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <ChatBubble
          message="Hello"
          isMyMessage={false}
          userAvatar={{uri: "https://randomuser.me/api/portraits/men/36.jpg"}}
        />
        <ChatBubble
          message="How are you?"
          isMyMessage={false}
          userAvatar={{uri: "https://randomuser.me/api/portraits/men/36.jpg"}}
        />
        <ChatBubble
          message="I'm doing great!"
          isMyMessage={false}
          userAvatar={{uri: "https://randomuser.me/api/portraits/men/36.jpg"}}
        />
        <ChatBubble
          message="Hi there!"
          isMyMessage={true}
          userAvatar={{ uri: "https://img0.baidu.com/it/u=3141797936,2644688093&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500" }}
        />
        <ChatBubble
          message="I'm fine, thanks!"
          isMyMessage={true}
          userAvatar={{ uri: "https://img0.baidu.com/it/u=3141797936,2644688093&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500" }}
        />
      </View>
      <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.iconButton} onPress={handleSend}>
          <Icon name="microphone" type="font-awesome-5" size={24} color="grey" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Icon name="plus" type="font-awesome-5" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  chatContainer: {
    flex: 1,
  },
  bubbleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContainer: {
    flex: 1,
  },
  myMessageContainer: {
    alignItems: 'flex-end',
  },
  otherMessageContainer: {
    alignItems: 'flex-start',
  },
  bubble: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    maxWidth: '70%',
  },
  myBubble: {
    alignSelf: 'flex-end',
  },
  otherBubble: {
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EFEFF4',
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
    marginRight: 8,
  },
  iconButton: {
    padding: 10,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    padding: 8,
  },
});

export default ChatScreen;

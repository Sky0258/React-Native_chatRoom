import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';

const WeChatVoiceCallScreen = () => {
  const [callState, setCallState] = useState('connected');
  const [callDuration, setCallDuration] = useState(0);

  useEffect(() => {
    let timer = null;
    if (callState === 'connected') {
      timer = setInterval(() => {
        setCallDuration((prevDuration) => prevDuration + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [callState]);

  const handleMuteToggle = () => {
    // 处理静音功能
  };

  const handleSpeakerToggle = () => {
    // 处理扬声器切换功能
  };

  const handleEndCall = () => {
    // 处理挂断电话功能
  };

  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <Image source={{ uri: "https://img2.baidu.com/it/u=440922581,501700109&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"}} style={styles.userAvatar} />
      <Text style={styles.userName}>Brandon</Text>
      <Text style={styles.callStateText}>通话中</Text>
      <Text style={styles.callDurationText}>{callDuration} 秒</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.muteButton]} onPress={handleMuteToggle}>
          <Icon name="microphone" type="font-awesome-5" size={33} color="#09bb07" />
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, styles.endCallButton]} onPress={handleEndCall}>
          <Icon name="phone-slash" type="font-awesome-5" size={33} color="#e64340" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.speakerButton]} onPress={handleSpeakerToggle}>
          <Icon name="volume-up" type="font-awesome-5" size={33} color="#09bb07" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  userAvatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 100,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  callStateText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  callDurationText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 80,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  muteButton: {
    backgroundColor: '#fff',
  },
  speakerButton: {
    backgroundColor: '#fff',
    marginLeft: 20,
  },
  endCallButton: {
    backgroundColor: '#fff',
  },
});

export default WeChatVoiceCallScreen;

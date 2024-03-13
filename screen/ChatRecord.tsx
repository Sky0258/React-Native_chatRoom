import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ChatRecordItem = ({ avatar, time, message }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <View style={styles.messageContainer}>
                <Text style={styles.time}>{time}</Text>
                <Text style={styles.message}>{message}</Text>
            </View>
        </View>
    );
};

const ChatRecordScreen = () => {
    const chatRecords = [
        { id: 1, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', time: '10:00 AM', message: 'Hello there!' },
        { id: 2, avatar: 'https://img0.baidu.com/it/u=3141797936,2644688093&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500', time: '10:05 AM', message: 'Hi, how are you?' },
        { id: 1, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', time: '10:00 AM', message: 'Hello there!' },
        { id: 2, avatar: 'https://img0.baidu.com/it/u=3141797936,2644688093&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500', time: '10:05 AM', message: 'Hi, how are you?' },
        { id: 1, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', time: '10:00 AM', message: 'Hello there!' },
        { id: 2, avatar: 'https://img0.baidu.com/it/u=3141797936,2644688093&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500', time: '10:05 AM', message: 'Hi, how are you?' },
        { id: 1, avatar: 'https://randomuser.me/api/portraits/men/36.jpg', time: '10:00 AM', message: 'Hello there!' },
        { id: 2, avatar: 'https://img0.baidu.com/it/u=3141797936,2644688093&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500', time: '10:05 AM', message: 'Hi, how are you?' },
        // 其他聊天记录数据
    ];

    return (
        <View style={styles.container1}>
            {chatRecords.map((record) => (
                <ChatRecordItem
                    key={record.id}
                    avatar={record.avatar}
                    time={record.time}
                    message={record.message}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f6f6f6',
    },
    container: {
        flex: 1,
        // padding: 20,
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: "#999",
        borderBottomWidth: 1,
        // height: 30,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    messageContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
    },
    time: {
        fontSize: 13,
        color: '#999',
        alignSelf: 'flex-end',
    },
    message: {
        fontSize: 23,
    },
});

export default ChatRecordScreen;

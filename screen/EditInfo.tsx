import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem, Avatar,Divider, } from '@rneui/themed';

const EditProfileScreen = () => {
    const [username, setUsername] = useState('Skybiubiubiu');
    const [birthday, setBirthday] = useState('2002-06-16');
    const [gender, setGender] = useState('女');
    const [email, setEmail] = useState('1234567890@163.com');
    const [phone, setPhone] = useState('1234567890');
    const [password, setPassword] = useState('**********');

    const handleSaveChanges = () => {
        // 处理保存修改信息逻辑
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>用户名</Text>
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#999" />
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            <Text style={styles.label}>生日</Text>
            <View style={styles.inputContainer}>
                <Icon name="calendar" size={20} color="#999" />
                <TextInput
                    style={styles.input}
                    value={birthday}
                    onChangeText={setBirthday}
                />
            </View>
            <Text style={styles.label}>性别</Text>
            <View style={styles.inputContainer}>
                <Icon name="venus-mars" size={20} color="#999" />
                <TextInput
                    style={styles.input}
                    value={gender}
                    onChangeText={setGender}
                />
            </View>
            <Text style={styles.label}>邮箱</Text>
            <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color="#999" />
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <Text style={styles.label}>电话</Text>
            <View style={styles.inputContainer}>
                <Icon name="phone" size={20} color="#999" />
                <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                />
            </View>
            {/* <Text style={styles.label}>密码</Text>
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#999" />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
            </View> */}
            <ListItem>
                <Icon name="lock" type="material-community" color="grey" size={20} style={{marginLeft: -12, marginRight: 7}}/>
                <ListItem.Content>
                    <ListItem.Title>修改密码</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron size={27}/>
            </ListItem>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
                <Text style={styles.saveButtonText}>保存修改</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f6f6f6',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#999',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 15,
    },
    input: {
        flex: 1,
        height: 40,
        marginLeft: 10,
    },
    saveButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 25,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EditProfileScreen;

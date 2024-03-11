import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Pressable } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
    const navigation = useNavigation();
    const [userInfo, setUserInfo] = useState({ userName: '', password: '' });
    const nameInput = React.createRef<any>();

    function changeInputValue(name: string, value: string): void {
        setUserInfo(pervState => ({
            ...pervState,
            [name]: value
        }))
    }

    function submitUserInfo(): void {
        console.log(userInfo.userName, userInfo.password);
        setUserInfo({
            userName: '',
            password: ''
        })
        nameInput.current.blur();
        navigation.navigate('Home');
    }

    function turnToRegisterPage(): void {
        navigation.navigate('Register');
    }
    return (
        <ImageBackground source={require('./images/login-page-bg(3).png')} style={{ width: '100%', height: '100%' }}>
            <ScrollView style={styles.container}>
                <Input ref={nameInput} value={userInfo.userName} placeholder="请输入账号" leftIcon={{ type: 'antdesign', name: 'user' }}
                    onChangeText={value => changeInputValue("userName", value)} />
                <Input ref={nameInput} value={userInfo.password} placeholder="请输入密码" leftIcon={{ type: 'antdesign', name: 'link' }} secureTextEntry={true}
                    onChangeText={value => changeInputValue("password", value)} rightIcon={{ type: 'antdesign', name: "eyeo" }} />
                <Button title='点击登录' color="#39b1e6" size="lg" style={styles.loginButton} onPress={submitUserInfo} />
                <Pressable onPress={turnToRegisterPage} style={styles.textButton}>
                    <Text>
                        没有账号？点击注册
                    </Text>
                </Pressable>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 270,
    },
    loginButton: {
        width: "50%"
    },
    textButton: {
        flexDirection: "row-reverse",
        marginHorizontal: 20,
        marginVertical: 30,
    }
})

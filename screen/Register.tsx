import { StyleSheet, Text, View, ImageBackground, ScrollView, Alert } from 'react-native'
import { Input, Button } from '@rneui/themed';
import React, { useState } from 'react'

export default function Register() {
    const [registerForm, setRegisterForm] = useState({
        userName: "",
        phone: "",
        password: "",
        confirmPassword: ""
    })

    function handleInputChange(name: string, value: string): void {
        setRegisterForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function submitRegisterForm(): void {
        console.log(registerForm);
        setRegisterForm({
            userName: "",
            phone: "",
            password: "",
            confirmPassword: ""
        });
        Alert.alert("注册成功")
    }

    return (
        // <ImageBackground source={require('./images/register-bg.jpg')} style={{ width: '100%', height: '100%' }}>
        <ScrollView>
            <View>
                <Text style={styles.title}>注册</Text>
                <Input label="用户名" value={registerForm.userName} onChangeText={value => handleInputChange("userName", value)}></Input>
                <Input label="电话号码" value={registerForm.phone} onChangeText={value => handleInputChange("phone", value)}></Input>
                <Input label="密码" value={registerForm.password} onChangeText={value => handleInputChange("password", value)}></Input>
                <Input label="确认密码" value={registerForm.confirmPassword} onChangeText={value => handleInputChange("confirmPassword", value)}></Input>
                <Button title="注册" color="#39b1e6" size="lg" onPress={submitRegisterForm}></Button>
            </View>
        </ScrollView>
        // </ImageBackground>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: "300",
        textAlign: "center"
    },
    labelTitle: {
        fontSize: 15
    },
    inputContain: {
        borderBottomColor: "red"
    }
})

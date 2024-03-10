import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from '../screen/Login';
import Register from '../screen/Register';
import { View, Text } from 'react-native'
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginPage" component={ LoginPage } />
            <Stack.Screen name="Register" component={ Register } />
        </Stack.Navigator>
    );
}
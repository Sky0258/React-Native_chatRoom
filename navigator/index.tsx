import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginPage from '../screen/Login';
import Register from '../screen/Register';
import ChartRoom from '../screen/ChartRoom';
import Contacts from '../screen/Contacts';
import SelfInfo from '../screen/SelfInfo'

import ChatMessage from '../screen/ChatMessage'
import Audio from '../screen/Audio'
import EditInfo from '../screen/EditInfo'
import ChartRecords from '../screen/ChatRecord'

const Stack = createNativeStackNavigator();

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            size: 150
        }}>
            <Tab.Screen name="消息" component={ChartRoom} options={{
                tabBarIcon: (focused: boolean, color: string, size: number) => (
                    <MaterialCommunityIcons name="message" color={focused ? "black" : "#7d7a83"} size={23} />
                ),
            }} />
            <Tab.Screen name="通讯录" component={Contacts} options={{
                tabBarIcon: (focused: boolean, color: string, size: number) => (
                    <MaterialCommunityIcons name="contacts" color={focused ? "black" : "#7d7a83"} size={23} />
                ),
            }} />
            <Tab.Screen name="个人中心" component={SelfInfo} options={{
                tabBarIcon: (focused: boolean, color: string, size: number) => (
                    <MaterialCommunityIcons name="home" color={focused ? "black" : "#7d7a83"} size={23} />
                ),
            }} ></Tab.Screen>
        </Tab.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ChatRoom" component={MyTabs} />
            <Stack.Screen name="ChatMessage" component={ChatMessage} />
            <Stack.Screen name="Audio" component={Audio} />
            <Stack.Screen name="EditInfo" component={EditInfo} />
            <Stack.Screen name="ChartRecords" component={ChartRecords} />
        </Stack.Navigator>
    );
}
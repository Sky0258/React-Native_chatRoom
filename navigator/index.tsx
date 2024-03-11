import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from '../screen/Login';
import Register from '../screen/Register';
import ChartRoom from '../screen/ChartRoom';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={ LoginPage } />
            <Stack.Screen name="Register" component={ Register } />
            <Stack.Screen name="Home" component={ ChartRoom } />
        </Stack.Navigator>
    );
}
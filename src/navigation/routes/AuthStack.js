import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import LandingScreen from '../../containers/LandingScreen/LandingScreen';
import LoginScreen from '../../containers/LoginScreen/LoginScreen';
import RegisterScreen from "../../containers/RegisterScreen/RegisterScreen";
import GuestHomeScreen from "../../containers/GuestHomeScreen/GuestHomeScreen";
import {
    LANDING,
    LOGIN,
    REGISTER,
    GUESTHOME
} from './route_paths'

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName={LANDING}
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name={LANDING} component={LandingScreen} />
            <Stack.Screen name={LOGIN} component={LoginScreen} />
            <Stack.Screen name={REGISTER} component={RegisterScreen} />
            <Stack.Screen name={GUESTHOME} component={GuestHomeScreen} />
        </Stack.Navigator>
    );
}
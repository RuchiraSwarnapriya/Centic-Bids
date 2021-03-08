import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../../containers/landingScreen/LandingScreen';
import LoginScreen from '../../containers/loginScreen/LoginScreen';
import RegisterScreen from "../../containers/registerScreen/RegisterScreen";
import GuestHomeScreen from "../../containers/guestHomeScreen/GuestHomeScreen";
import {
    LANDING,
    LOGIN,
    REGISTER,
    GUESTHOME
} from './route_paths';

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
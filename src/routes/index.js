import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../containers/LandingScreen/LandingScreen';
import LoginScreen from '../containers/LoginScreen/LoginScreen';
import HomeScreen from '../containers/HomeScreen/HomeScreen';
import BiddingScreen from '../containers/BiddingScreen/BiddingScreen';
import {
    LANDING,
    LOGIN,
    HOME,
    BIDDING
} from './route_paths';

const Stack = createStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name={LANDING} component={LandingScreen} />
                <Stack.Screen name={LOGIN} component={LoginScreen} />
                <Stack.Screen name={HOME} component={HomeScreen} />
                <Stack.Screen name={BIDDING} component={BiddingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;

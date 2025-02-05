import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../containers/HomeScreen/HomeScreen';
import BiddingScreen from "../../../containers/BiddingScreen/BiddingScreen";
import {
    HOME,
    BIDDING,
} from '../../routePaths';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName={HOME}
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name={HOME} component={HomeScreen} />
            <Stack.Screen name={BIDDING} component={BiddingScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack
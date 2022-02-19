import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens';

const HomeStack = createStackNavigator();


{/** Add stacks */ }
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator
            initialRouteName='HomeStackScreen'
            screenOptions={{ headerShown: false }}
        >
            <HomeStack.Screen name='HomeScreen' component={HomeScreen} />
        </HomeStack.Navigator>
    );
}


export default HomeStackScreen;
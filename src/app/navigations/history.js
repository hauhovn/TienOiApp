import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { HistoryScreen } from '../screens';

const HistoryStack = createStackNavigator();


{/** Add stacks */ }
const HistoryStackScreen = () => {
    return (
        < HistoryStack.Navigator
            initialRouteName=' HistoryStackScreen'
            screenOptions={{ headerShown: false }}
        >
            < HistoryStack.Screen name=' HistoryScreen' component={HistoryScreen} />
        </ HistoryStack.Navigator>
    );
}


export default HistoryStackScreen;
import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { SettingScreen } from '../screens';

const SettingStack = createStackNavigator();


{/** Add stacks */ }
const SettingStackScreen = () => {
    return (
        <SettingStack.Navigator
            initialRouteName='SettingStackScreen'
            screenOptions={{ headerShown: false }}
        >
            <SettingStack.Screen name='SettingScreen' component={SettingScreen} />
        </SettingStack.Navigator>
    );
}


export default SettingStackScreen;
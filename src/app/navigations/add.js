import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { AddScreen } from '../screens';

const AddStack = createStackNavigator();


{/** Add stacks */ }
const AddStackScreen = () => {
    return (
        <AddStack.Navigator
            initialRouteName='AddStackScreen'
            screenOptions={{ headerShown: false }}>
            <AddStack.Screen name='AddScreen' component={AddScreen} />
        </AddStack.Navigator>
    );
}


export default AddStackScreen;
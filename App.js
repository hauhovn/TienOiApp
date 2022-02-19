/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { Alert, LogBox } from 'react-native';
LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

import {
    HomeScreen,
    HistoryScreen,
    AddScreen,
    SettingScreen,
    LogoutScreen,
    LoginScreen
} from './src/app/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const AddStack = createStackNavigator();
const SettingStack = createStackNavigator();
const LogoutStack = createStackNavigator();
const LoginStack = createStackNavigator();
const HistoryStack = createStackNavigator();

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {

    {/** Main Tabs */ }
    const TabsScreenStack = ({ navigation }) => {
        return (
            <Tab.Navigator initialRouteName="TabsScreenStack">
                <Tab.Screen
                    name="HomeStackScreen"
                    component={HomeStackScreen}
                />
                <Tab.Screen
                    name="AddStackScreen"
                    component={AddStackScreen}
                />
                <Tab.Screen
                    name="HistoryStackScreen"
                    component={HistoryStackScreen}
                />
            </Tab.Navigator>
        );
    };

    {/** Main Drawer */ }
    const DrawerScreenStack = () => {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="TabsScreenStack" component={TabsScreenStack} />
                <Drawer.Screen name="LogoutStackScreen" component={LogoutStackScreen} />
                <Tab.Screen name="SettingStackScreen" component={SettingStackScreen} />
            </Drawer.Navigator>
        );
    }

    {/** Home stacks */ }
    const HomeStackScreen = () => {
        return (
            <HomeStack.Navigator initialRouteName='HomeStackScreen'>
                <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            </HomeStack.Navigator>
        );
    }

    {/** Add stacks */ }
    const AddStackScreen = () => {
        return (
            <AddStack.Navigator initialRouteName='AddStackScreen'>
                <AddStack.Screen name='AddScreen' component={AddScreen} />
            </AddStack.Navigator>
        );
    }

    {/** History stacks */ }
    const HistoryStackScreen = () => {
        return (
            <HistoryStack.Navigator initialRouteName='HistoryStackScreen'>
                <HistoryStack.Screen name='HistoryScreen' component={HistoryScreen} />
            </HistoryStack.Navigator>
        );
    }

    {/** Setting stacks */ }
    const SettingStackScreen = () => {
        return (
            <SettingStack.Navigator initialRouteName='SettingStackScreen'>
                <SettingStack.Screen name='SettingScreen' component={SettingScreen} />
            </SettingStack.Navigator>
        );
    }

    {/** Logout stacks */ }
    const LogoutStackScreen = () => {
        return (
            <LogoutStack.Navigator initialRouteName='LogoutStackScreen'>
                <LogoutStack.Screen name='LogoutScreen' component={LogoutScreen} />
            </LogoutStack.Navigator>
        );
    }

    {/** Login stacks */ }
    const LoginStackScreen = () => {
        return (
            <LoginStack.Navigator initialRouteName='LoginStackScreen'>
                <LoginStack.Screen name='LoginScreen' component={LoginScreen} />
            </LoginStack.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
                <Stack.Screen name='DrawerScreenStack' component={DrawerScreenStack} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default App;

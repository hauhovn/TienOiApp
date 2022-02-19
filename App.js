import React from 'react';
import 'react-native-gesture-handler';
import {
    LogBox,
} from 'react-native';
LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
import {
    LoginScreen,
    LogoutScreen,
} from './src/app/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerContent } from './src/app/components';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const LoginStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const LogoutStack = createStackNavigator();

import {
    AddStackScreen,
    HistoryStackScreen,
    HomeStackScreen,
    SettingStackScreen
} from './src/app/navigations'

const App = () => {

    {/** Logout stacks */ }
    const LogoutStackScreen = () => {
        return (
            <LogoutStack.Navigator
                initialRouteName='LogoutStackScreen'
                screenOptions={{ headerShown: false }}
            >
                <LogoutStack.Screen name='LogoutScreen' component={LogoutScreen} />
            </LogoutStack.Navigator>
        );
    }

    {/** Main Tabs */ }
    const TabStackScreen = () => {

        return (
            <Tab.Navigator
                initialRouteName="TabStackScreen"
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        position: 'absolute',
                        backgroundColor: 'gray',
                        height: 80,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        marginHorizontal: 2
                    },
                }}
            >
                <Tab.Screen
                    name="HomeStackScreen"
                    component={HomeStackScreen}
                    options={{
                        tabBarLabel: 'Trang chủ',
                    }}
                />
                <Tab.Screen
                    name="AddStackScreen"
                    component={AddStackScreen}
                    options={{
                        tabBarLabel: 'Thêm giao dịch',
                    }}
                />
                <Tab.Screen
                    name="HistoryStackScreen"
                    component={HistoryStackScreen}
                    options={{
                        tabBarLabel: 'Lịch sử',
                    }}
                />
            </Tab.Navigator>
        );
    };
    {/** Main Drawer */ }
    const DrawerStackScreen = () => {

        return (
            <Drawer.Navigator
                drawerContent={props => <DrawerContent {...props} />}
                initialRouteName='DrawerStackScreen'
                screenOptions={{ headerShown: false }}
            >
                <Drawer.Screen name="TabStackScreen" component={TabStackScreen} />
                <Drawer.Screen name="LogoutStackScreen" component={LogoutStackScreen} />
                <Drawer.Screen name="SettingStackScreen" component={SettingStackScreen} />
            </Drawer.Navigator>
        );
    }

    {/** Login stacks */ }
    const LoginStackScreen = () => {
        return (
            <LoginStack.Navigator
                initialRouteName='LoginStackScreen'
            >
                <LoginStack.Screen name='LoginScreen' component={LoginScreen} />
            </LoginStack.Navigator>
        );
    }

    {/** Main Navigation */ }
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name='LoginStackScreen' component={LoginStackScreen} />
                <Stack.Screen name='DrawerStackScreen' component={DrawerStackScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default App;

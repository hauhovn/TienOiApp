import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {

    const check = true;


    return (
        <SafeAreaView>
            <Text style={{ fontSize: 42, color: 'red' }}>Login screen</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('DrawerStackScreen');
                }}
            >
                <Text style={{ fontSize: 42, color: 'red' }}>Next</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default LoginScreen
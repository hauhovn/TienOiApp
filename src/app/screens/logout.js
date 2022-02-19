import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from 'react-native';

const LogoutScreen = ({ navigation }) => {


    return (
        <SafeAreaView>
            <Text style={{ fontSize: 42, color: 'red' }}>Logout screen</Text>
        </SafeAreaView>
    )
}

export default LogoutScreen
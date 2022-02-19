import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from 'react-native';

const SettingScreen = ({ navigation }) => {


    return (
        <SafeAreaView>
            <Text style={{ fontSize: 42, color: 'red' }}>Setting screen</Text>
        </SafeAreaView>
    )
}

export default SettingScreen
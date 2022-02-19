import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from 'react-native';

const HomeScreen = ({ navigation }) => {


    return (
        <SafeAreaView>
            <Text style={{ fontSize: 42, color: 'red' }}>Home screen</Text>
        </SafeAreaView>
    )
}

export default HomeScreen
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from 'react-native';

const HistoryScreen = ({ navigation }) => {


    return (
        <SafeAreaView>
            <Text style={{ fontSize: 42, color: 'red' }}>History screen .</Text>
        </SafeAreaView>
    )
}

export default HistoryScreen
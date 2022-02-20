import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from 'react-native';

const HistoryScreen = ({ navigation }) => {


    return (
        <SafeAreaView>
            <Text style={{ fontSize: 42, color: '#ffc20f' }}>History screen .</Text>
            <View style={{ padding: 20, backgroundColor: '#ffc20f' }} />
            <View style={{ padding: 20, backgroundColor: '#fed24b' }} />
            <View style={{ padding: 20, backgroundColor: '#ffdf82' }} />
            <View style={{ padding: 20, backgroundColor: '#ffedbb' }} />
        </SafeAreaView>
    )
}

export default HistoryScreen
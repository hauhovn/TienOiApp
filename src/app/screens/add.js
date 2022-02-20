import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from 'react-native';

const AddScreen = ({ navigation }) => {


    return (
        <SafeAreaView>
            <Text style={{ fontSize: 42, color: '#00a88f' }}>Add screen</Text>
            <View style={{ padding: 20, backgroundColor: '#00a88f' }} />
            <View style={{ padding: 20, backgroundColor: '#40bdab' }} />
            <View style={{ padding: 20, backgroundColor: '#7ad2c4' }} />
            <View style={{ padding: 20, backgroundColor: '#b5e6e0' }} />
        </SafeAreaView>
    )
}

export default AddScreen
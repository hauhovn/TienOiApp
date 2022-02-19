import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from 'react-native';

const AddScreen = ({ navigation }) => {


    return (
        <SafeAreaView>
            <Text style={{ fontSize: 42, color: 'red' }}>Add screen</Text>
        </SafeAreaView>
    )
}

export default AddScreen
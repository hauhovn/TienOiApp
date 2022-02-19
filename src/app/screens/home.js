import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {


    return (
        <SafeAreaView>
            <Text style={{ fontSize: 42, color: 'red' }}>Home screen .</Text>
            <TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>

                <Text style={{ fontSize: 42, color: 'red' }}>open drawer .</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomeScreen
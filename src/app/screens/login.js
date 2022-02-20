import React from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import { LogoIcon } from '../assets/icons';

const LoginScreen = ({ navigation }) => {

    const check = true;


    return (
        <View style={{ flex: 1, backgroundColor: '#62cf38' }}>
            <Text style={{
                fontSize: 42,
                color: '#fff',
                textTransform: 'uppercase',
                alignSelf: 'center',
                paddingVertical: 140,
                fontWeight: 'bold'
            }}>Đăng nhập</Text>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <LogoIcon height='260' width='260' />
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={{
                        padding: 14,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        marginHorizontal: 20,
                        borderRadius: 30
                    }}
                    onPress={() => {
                        navigation.navigate('DrawerStackScreen');
                    }}
                >
                    <Text style={{ fontSize: 42, color: 'red' }}>Next</Text>
                </TouchableOpacity>
            </View>

            <Text style={{
                alignSelf: 'center',
                justifyContent: 'flex-end',
                fontSize: 18,
                color: '#fff'
            }}>Hồ Văn Hậu</Text>
        </View>
    )
}

export default LoginScreen
import React from "react";
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { FONTS } from '../assets/constants/theme';

const LogoutScreen = ({ navigation, route }) => {

    const dt = route.params;
    console.log(`route: `, dt);

    return (


        <View style={{
            backgroundColor: '#ffffff',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        }}>
            <Text style={{
                ...FONTS.h1,
                fontSize: 42,
                textAlign: 'center',
                marginBottom: 20,
                color: '#585858',
                padding: 40
            }}>Bạn có chắc ?</Text>
            <Text style={{ ...FONTS.body1, fontSize: 18, color: '#585858' }}>Bạn có chắc chắn muốn đăng xuất?</Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 60,
                width: '100%'
            }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#efefef',
                        paddingVertical: 8,
                        paddingHorizontal: 32,
                        borderRadius: 12,
                        justifyContent: 'center'
                    }}
                    onPress={() => { navigation.navigate('TabStackScreen') }}
                >
                    <Text style={{
                        ...FONTS.h1,
                        fontSize: 22,
                        textTransform: 'uppercase',
                        color: '#545454'
                    }}>Trở về</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#7dd1f9',
                        paddingVertical: 8,
                        paddingHorizontal: 32,
                        borderRadius: 12,
                        justifyContent: 'center'
                    }}
                    onPress={() => { navigation.navigate('LoginStackScreen') }}
                >
                    <Text style={{
                        ...FONTS.h1,
                        fontSize: 22,
                        textTransform: 'uppercase',
                        color: '#f2ffff',
                    }}>Đồng ý</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default LogoutScreen
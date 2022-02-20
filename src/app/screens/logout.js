import React from "react";
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

const LogoutScreen = ({ navigation, route }) => {

    const dt = route.params;
    console.log(`route: `, dt);

    return (

        <View style={{
            backgroundColor: '#4287f5',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{ fontSize: 42, textAlign: 'center', marginBottom: 20, color: '#fff' }}>Đăng Xuất</Text>
            <Text style={{ fontSize: 18, color: '#fff' }}>Bạn có chắc muốn đăng xuất?</Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 60,
                width: '100%'
            }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#f54242',
                        paddingVertical: 26,
                        paddingHorizontal: 24,
                        borderRadius: 24
                    }}
                    onPress={() => { navigation.navigate('LoginStackScreen') }}
                >
                    <Text style={{ fontSize: 24, textTransform: 'uppercase', color: '#fff' }}>Đồng ý</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#05e818',
                        paddingVertical: 26,
                        paddingHorizontal: 24,
                        borderRadius: 24
                    }}
                    onPress={() => { navigation.navigate('TabStackScreen') }}
                >
                    <Text style={{ fontSize: 24, textTransform: 'uppercase', color: '#fff' }}>Trở về</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LogoutScreen
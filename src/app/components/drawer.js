import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

export function DrawerContent(props) {


    const avt = require('../assets/images/avatar.jpg');

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                {/** Info */}
                <View style={styles.infoBox}>
                    <Image
                        style={styles.avatar}
                        source={avt} />
                    <View style={styles.info}>
                        <Text style={styles.textInfo}>Nguyễn Thị Ngân</Text>
                        <Text style={{ ...styles.textInfo, fontSize: 14 }}>hauhovn@gmail.com</Text>
                    </View>
                </View>
                {/** List */}
                <View>
                    <DrawerItem
                        label={'Trang chủ'}
                        onPress={() => props.navigation.navigate('HomeStackScreen')}
                    />
                    <DrawerItem
                        label={'Lịch sử'}
                        onPress={() => props.navigation.navigate('HistoryStackScreen')}
                    />
                    <DrawerItem
                        label={'Thêm giao dịch'}
                        onPress={() => props.navigation.navigate('AddStackScreen')}
                    />
                    <DrawerItem
                        label={'Cài đặt'}
                        onPress={() => props.navigation.navigate('SettingStackScreen')}
                    />
                </View>
            </DrawerContentScrollView>

            {/** Logout box */}
            <View style={styles.logoutBox}>
                <DrawerItem
                    label={'Đăng xuất'}
                    onPress={() => props.navigation.navigate('LogoutStackScreen')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    infoBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 6
    },
    info: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    textInfo: {
        fontSize: 16,
        color: '#000'
    },
    avatar: {
        height: 84,
        width: 84,
        borderRadius: 42
    },
    logoutBox: {
        justifyContent: 'flex-end',
        padding: 12
    },
    logOutText: {
        fontSize: 25,
        color: '#5647'
    }
});
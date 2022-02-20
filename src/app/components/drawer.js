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
import Svg, { Path, SvgUri, G, Rect } from 'react-native-svg';
import {
    HomeIcon,
    SettingIcon,
    AddIcon,
    LogoutIcon,
    HistoryIcon
} from '../assets/icons';

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
                <View style={{ marginTop: 24 }}>
                    <DrawerItem
                        icon={() => {
                            return (
                                <HomeIcon />)
                        }}
                        label={'Trang chủ'}
                        onPress={() => props.navigation.navigate('HomeStackScreen')}
                    />
                    <DrawerItem
                        icon={() => {
                            return (
                                <HistoryIcon />
                            )
                        }}
                        label={'Lịch sử'}
                        onPress={() => props.navigation.navigate('HistoryStackScreen')}
                    />
                    <DrawerItem
                        icon={() => { return (<AddIcon />) }}
                        label={'Thêm giao dịch'}
                        onPress={() => props.navigation.navigate('AddStackScreen')}
                    />
                    <DrawerItem
                        icon={() => { return (<SettingIcon />) }}
                        label={'Cài đặt'}
                        onPress={() => props.navigation.navigate('SettingStackScreen')}
                    />
                </View>
                <View style={{ width: '100%', height: 2, backgroundColor: '#a3a3a3' }} />
            </DrawerContentScrollView>

            {/** Logout box */}
            <View style={styles.logoutBox}>
                <DrawerItem
                    icon={() => { return (<LogoutIcon />) }}
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
    },
    logOutText: {
        fontSize: 25,
        color: '#5647'
    }
});
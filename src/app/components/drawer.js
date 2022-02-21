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
    HistoryIcon,
    OptionIcon
} from '../assets/icons';
import { FONTS, SIZES } from '../assets/constants/theme';
import PaperPlaneIcon from "../assets/icons/paper-plane";

export function DrawerContent(props) {


    const avt = require('../assets/images/avatar.jpg');
    const name = 'Nguyễn Thị Ngân';
    const email = 'hauhovn@gmail.com';

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                {/** Info */}

                <View style={styles.infoBox}>
                    <Image
                        style={styles.avatar}
                        source={avt} />
                    <View style={styles.info}>
                        <Text style={{ ...FONTS.h4, ...styles.textInfo, maxWidth: '100%' }}>{name}</Text>
                        <Text style={{ ...FONTS.body4, ...styles.textInfo, fontSize: 14 }}>{email}</Text>
                    </View>
                </View>
                {/** List */}
                <View style={{ marginTop: 0 }}>
                    <DrawerItem
                        icon={() => {
                            return (
                                <HomeIcon color='#407fbc' />)
                        }}
                        label={'Trang chủ'}
                        labelStyle={{ ...FONTS.body1, fontSize: 18 }}
                        onPress={() => props.navigation.navigate('HomeStackScreen')}
                    />
                    <DrawerItem
                        icon={() => { return (<AddIcon color='#40bdab' />) }}
                        label={'Thêm giao dịch'}
                        labelStyle={{ ...FONTS.body1, fontSize: 18 }}
                        onPress={() => props.navigation.navigate('AddStackScreen')}
                    />
                    <DrawerItem
                        icon={() => {
                            return (
                                <HistoryIcon color='#fed24b' />
                            )
                        }}
                        label={'Lịch sử'}
                        labelStyle={{ ...FONTS.body1, fontSize: 18 }}
                        onPress={() => props.navigation.navigate('HistoryStackScreen')}
                    />

                    <DrawerItem
                        icon={() => { return (<SettingIcon color='#f79459' />) }}
                        label={'Cài đặt'}
                        labelStyle={{ ...FONTS.body1, fontSize: 18 }}
                        onPress={() => props.navigation.navigate('SettingStackScreen')}
                    />
                </View>
                <View style={{ width: '100%', height: .8, backgroundColor: '#018ba4' }} />
                <DrawerItem
                    icon={() => { return (<OptionIcon color='#d87dbd' />) }}
                    label={'Cơ cấu các hũ'}
                    labelStyle={{ ...FONTS.body1, fontSize: 18 }}
                    onPress={() => props.navigation.navigate('SettingStackScreen')}
                />
                <DrawerItem
                    icon={() => { return (<PaperPlaneIcon color='#7d7dff' />) }}
                    label={'Báo cáo thu chi'}
                    labelStyle={{ ...FONTS.body1, fontSize: 18, width: SIZES.width * .5 }}
                    onPress={() => props.navigation.navigate('SettingStackScreen')}
                />
            </DrawerContentScrollView>

            {/** Logout box */}
            <View style={styles.logoutBox}>
                <DrawerItem
                    icon={() => { return (<LogoutIcon />) }}
                    label={'Đăng xuất'}
                    labelStyle={{ ...FONTS.body1, fontSize: 18 }}
                    onPress={() => { props.navigation.closeDrawer(); props.navigation.navigate('LogoutStackScreen', { screen: 'LogoutScreen', params: { isLogout: true } }) }}
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
        justifyContent: 'center',
        width: 150,
        height: 140
    },
    textInfo: {
        paddingTop: 12,
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
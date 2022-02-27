import React, { useEffect } from "react";
import { Text, View, StyleSheet } from 'react-native';
import { LogoIcon } from '../assets/icons';
import { GoogleSigninButton } from '@react-native-community/google-signin';
import { FONTS } from '../assets/constants/theme';

const LoginScreen = ({ navigation }) => {

    const check = true;

    useEffect(() => {
        check && navigation.navigate('DrawerStackScreen');
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: '#3fabdb' }}>
            <Text style={styles.label}>Sign In</Text>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <LogoIcon height='260' width='260' />
            </View>
            <View style={{ flex: 1 }}>
                <GoogleSigninButton
                    style={{ width: 320, height: 110, alignSelf: 'center' }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={() => {
                        navigation.navigate('DrawerStackScreen');
                    }} />
            </View>
            <Text style={styles.cprtext}>Ngân Hậu</Text>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    label: {
        ...FONTS.h2,
        fontSize: 52,
        color: '#fff',
        textTransform: 'uppercase',
        alignSelf: 'center',
        paddingVertical: 140
    },
    cprtext: {
        ...FONTS.body1,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        fontSize: 18,
        color: '#fff',
        opacity: .5
    },
})
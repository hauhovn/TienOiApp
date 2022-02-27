import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const COLORS = {

};

export const SIZES = {
    // Global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    //Font sizes
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    // App dimesions
    width,
    height,
};

export const FONTS = {
    h1: { fontFamily: 'Judson-Bold', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'ArimaMadurai-Bold', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'Judson-Bold', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'ArimaMadurai-Bold', fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: 'ArimaMadurai-Medium', fontSize: SIZES.h1, lineHeight: 36 },
    body2: { fontFamily: 'Bebas', fontSize: SIZES.h2, lineHeight: 30 },
    body3: { fontFamily: 'Judson-Regular', fontSize: SIZES.h3, lineHeight: 22 },
    body4: { fontFamily: 'Judson-Italic', fontSize: SIZES.h4, lineHeight: 22 },
    button4: {
        fontFamily: 'Linotte-Semi-Bold',
        fontSize: SIZES.h4,
        lineHeight: 22,
    },
};

export const STYLES = {
    container: {
        flex: 1,
        marginBottom: SIZES.h2 + 73
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 10,
    },
    box: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius * 2,
    },
    button: {
        backgroundColor: COLORS.white,
        margin: 2,
        borderRadius: SIZES.base,
    },
    buttonText: {
        paddingVertical: SIZES.base,
        paddingHorizontal: SIZES.font,
        ...FONTS.button4,
        textTransform: 'uppercase',
        alignSelf: 'center',
    },
    icon: {
        resizeMode: 'contain',
        height: 36,
        width: 36,
    },
    icon1: {
        resizeMode: 'contain',
        height: 28,
        width: 28,
    },
    icon2: {
        resizeMode: 'contain',
        height: 22,
        width: 22,
    },
    icon3: {
        resizeMode: 'contain',
        height: 16,
        width: 16,
    },
    icon4: {
        resizeMode: 'contain',
        height: 12,
        width: 12,
    }
};

const appTheme = { FONTS, COLORS, SIZES, STYLES };

export default appTheme;

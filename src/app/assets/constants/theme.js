import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const COLORS = {
    islandGreen: '#2BAE66FF',
    redDark: '#be0000',
    white: '#FCF6F5FF',
    black: '#1e1f20',
    gray: '#6a6a6a',
    grayScale: '#d8d8d8',
    blue: '#0682fe',
    green: '#47b596',
    focus: '#2BAE66FF',
    unFocus: '#6a6a6a',
    prolife: '#c78787',
    setting: '#87c799',
    history: '#c7c187',
    historyBR: 'rgba(199, 193, 135,0.2)',
    home: '#87c7c6',
    create: '#3cbfb1',
    shadow: '#dedede',
    lightGray: '#d3d3d3',
    darkGray: '#a9a9a9',
    backgroundFade: 'rgba(255, 255, 255,0.33)',
    orangeLight: '#f8a825',
    orangeDark: '#ee7c2a'
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
    h1: { fontFamily: 'Linotte-Heavy', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'Linotte-Bold', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'Linotte-Bold', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'Linotte-Bold', fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: 'Linotte-Regular', fontSize: SIZES.h1, lineHeight: 36 },
    body2: { fontFamily: 'Linotte-Regular', fontSize: SIZES.h2, lineHeight: 30 },
    body3: { fontFamily: 'Linotte-Regular', fontSize: SIZES.h3, lineHeight: 22 },
    body4: { fontFamily: 'Linotte-Regular', fontSize: SIZES.h4, lineHeight: 22 },
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
        shadowColor: '#888',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
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

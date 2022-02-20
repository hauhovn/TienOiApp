import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import { JarIcon, MenuIcon, MinusIcon, PlusIcon } from "../assets/icons";
import { FONTS, SIZES } from '../assets/constants/theme';

const HomeScreen = ({ navigation }) => {

    {/** Money box */ }
    function renderMoneyBox({ pressAdd, pressSpent, ...props }) {
        return (
            <View style={styles.moneyBox} key={props?.type ? props.type : ''}>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                }}>
                    {/** Month text */}
                    <Text style={styles.monthText}>{props?.type ? props.type : ''}</Text>
                    <View style={{ alignSelf: 'flex-end', paddingVertical: 12, paddingRight: '10%' }}>
                        <Text style={{ ...FONTS.body4, fontSize: 14, color: '#92a8b4' }}>Số dư khả dụng</Text>
                        <Text style={{ ...FONTS.h1, fontSize: 32, color: '#fff', height: 34 }}>
                            {props?.money ? props.money : 0} đ
                        </Text>
                    </View>
                </View>

                {/** Add & spent boxs */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity
                        onPress={() => pressAdd()}
                        style={styles.smallBox}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ ...FONTS.body3, color: '#475562', fontSize: 18 }}>Thu nhập</Text>
                            <PlusIcon height='24' width='24' color='#00ff08' />
                        </View>
                        <Text style={{ ...FONTS.h2, color: '#fff', fontSize: 16 }}>{props?.add ? props.add : 0} ₫</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => pressSpent()}
                        style={styles.smallBox}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ ...FONTS.body3, color: '#475562', fontSize: 18 }}>Chi tiêu</Text>
                            <MinusIcon height='24' width='24' color='#e00' />
                        </View>
                        <Text style={{ ...FONTS.h2, color: '#fff', fontSize: 16 }}>{props?.spent ? props.spent : 0} ₫</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    const boxs = [{
        type: 'Tháng',
        money: '36.100.800',
        add: '8.200.000',
        spent: '420.000',
        pressAdd: () => {
            console.log('add_thang');
        },
        pressSpent: () => {
            console.log('spent_thang');
        }
    },
    {
        type: 'Tuần này',
        money: '6.100.800',
        add: '200.000',
        spent: '20.000',
        pressAdd: () => {
            console.log('add_tuan');
        },
        pressSpent: () => {
            console.log('spent_tuan');
        }
    },
    {
        type: 'Hôm nay',
        money: '100.800',
        add: '20.000',
        spent: '2.000',
        pressAdd: () => {
            console.log('add_nay');
        },
        pressSpent: () => {
            console.log('spent_nay');
        }
    },
    ]
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, marginBottom: 120 }}>

                {/** Menu button */}
                <TouchableOpacity
                    style={{ padding: 20 }}
                    onPress={() => navigation.openDrawer()}
                >
                    <MenuIcon />
                </TouchableOpacity>

                {/** Render boxs */}
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ flex: 1, marginLeft: 10 }}>
                    {
                        boxs.map((box) => {
                            return renderMoneyBox({
                                type: box.type,
                                money: box.money,
                                add: box.add,
                                spent: box.spent,
                                pressAdd: () => {
                                    box.pressAdd()
                                },
                                pressSpent: () => {
                                    box.pressSpent()
                                }
                            })
                        })
                    }
                </ScrollView>

                <JarIcon />
            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    moneyBox: {
        width: SIZES.width * .8,
        marginRight: 12,
        height: 195,
        backgroundColor: '#0154a4',
        alignSelf: 'center',
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    smallBox: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        backgroundColor: '#7ba6d0',
        padding: 12, borderRadius: 10,
        width: '43%'
    },
    monthText: {
        ...FONTS.h2,
        paddingLeft: 12,
        color: '#fdf87a',
        fontSize: 18,
        width: 100
    },
});

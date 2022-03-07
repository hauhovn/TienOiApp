import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import { ArrowRightIcon, MenuIcon, MinusIcon, MoneyIcon, PlusIcon } from "../assets/icons";
import { FONTS, SIZES } from '../assets/constants/theme';
import { formatMoney } from '../utils';
import { boxs, jars } from '../../server/fake';
import {
    ProgressChart
} from "react-native-chart-kit";

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
                            {props?.money ? formatMoney(props.money) : 0} đ
                        </Text>
                    </View>
                </View>

                {/** Add & spent boxs */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 12 }}>
                    <TouchableOpacity
                        onPress={() => pressAdd()}
                        style={styles.smallBox}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ ...FONTS.body3, color: '#475562', fontSize: 18 }}>Thu nhập</Text>
                            <PlusIcon height='24' width='24' color='#00ff08' />
                        </View>
                        <Text
                            style={{ ...FONTS.h2, color: '#fff', fontSize: 16 }}>
                            {props?.add ? formatMoney(props.add) : 0} ₫</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => pressSpent()}
                        style={styles.smallBox}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ ...FONTS.body3, color: '#475562', fontSize: 18 }}>Chi tiêu</Text>
                            <MinusIcon height='24' width='24' color='#e00' />
                        </View>
                        <Text style={{ ...FONTS.h2, color: '#fff', fontSize: 16 }}>
                            {props?.spent ? formatMoney(props.spent) : 0} ₫</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    { /** Jar */ }
    function renderJar(jar, { pressJar }) {
        return (
            <TouchableOpacity
                onPress={() => { pressJar(jar.id) }}
                key={jar.id}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 12,
                    marginHorizontal: 3,
                    borderRadius: 12,
                    backgroundColor: '#fafafa',
                    paddingVertical: 16,
                    shadowColor: "#0154a4",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 3,
                }}>
                <View style={{
                    backgroundColor: jar.color,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 48,
                    height: 48,
                    marginHorizontal: 6,
                    borderRadius: 12,
                }}><MoneyIcon color='#fff' height='28' /></View>
                <View style={{ marginTop: -10 }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            ...FONTS.h2,
                            fontSize: 22,
                            color: '#636363'
                        }}>{jar.name}</Text>
                        <Text style={{
                            ...FONTS.h2,
                            fontSize: 18,
                            padding: 6,
                            color: '#636363'
                        }}
                        >{formatMoney(jar.amount)} ₫</Text>
                    </View>
                    {renderProgressChart({
                        value: jar.amount,
                        total: jar.total,
                        height: 6,
                        width: SIZES.width - (110 + SIZES.padding + SIZES.radius)
                    })}
                </View>
                <View style={{ marginRight: 14 }}>
                    <ArrowRightIcon color='#636363' height='30' />
                </View>
            </TouchableOpacity>
        );
    }

    {/** Progress chart */ }
    function renderProgressChart({ value, total, height, width }) {
        const check = (value / total);
        return (
            <View style={{
                height: height,
                width: width,
                backgroundColor: '#507381',
                borderRadius: height
            }}>
                <View style={{
                    borderTopLeftRadius: height,
                    borderBottomLeftRadius: height,
                    borderBottomRightRadius: check == 1 ? height : 0,
                    borderTopRightRadius: check == 1 ? height : 0,
                    height: height,
                    width: width * check,
                    backgroundColor:
                        (check > .75 ?
                            '#25f9f1' : check > .45 ?
                                '#fcfa01' : '#fb2501')
                }} />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

            {/** Money stats */}
            <ScrollView style={{ flex: 1, marginBottom: 120 }}>
                {/** Menu button */}
                <TouchableOpacity
                    style={{ padding: SIZES.radius }}
                    onPress={() => navigation.openDrawer()}
                >
                    <MenuIcon />
                </TouchableOpacity>

                {/** Render boxs */}
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ flex: 1, marginLeft: SIZES.radius, paddingBottom: 12 }}>
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

                <View style={{ backgroundColor: '#0154a4a3', height: .6, margin: SIZES.padding }} />

                {/** Jars list */}
                <Text style={{ ...FONTS.body2, fontSize: 32, color: '#7d7d7d', padding: SIZES.padding, paddingTop: 0, lineHeight: 35 }}>Danh sách</Text>
                <View style={{ marginHorizontal: SIZES.padding }}>
                    {
                        jars.map((jar) => {
                            return (
                                renderJar(jar, {
                                    pressJar: (jarId) => {
                                        console.log(`Press jar: `, jarId);
                                    }
                                })
                            );
                        })
                    }
                </View>

                <View style={{ backgroundColor: '#0154a4a3', height: .6, margin: 20 }} />

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

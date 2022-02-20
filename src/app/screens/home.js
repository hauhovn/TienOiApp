import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Text,
    TouchableOpacity,
    View,
    ScrollView
} from 'react-native';
import { MenuIcon, MinusIcon, PlusIcon } from "../assets/icons";

const HomeScreen = ({ navigation }) => {


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

                {/** Money box */}
                <View style={{
                    width: '90%',
                    height: 180,
                    backgroundColor: '#0154a4',
                    alignSelf: 'center',
                    borderRadius: 12
                }}>
                    <View style={{ alignSelf: 'flex-end', paddingVertical: 12, paddingRight: '10%' }}>
                        <Text style={{ fontSize: 14, color: '#92a8b4' }}>Số dư khả dụng</Text>
                        <Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold' }}>2.886.468 đ</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#7ba6d0',
                            padding: 12, borderRadius: 10,
                            width: '43%'
                        }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#475562', fontSize: 14 }}>Thu nhập</Text>
                                <PlusIcon height='24' width='24' color='#00ff08' />
                            </View>
                            <Text style={{ color: '#fff', fontSize: 16 }}>8.000.000 đ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: '#7ba6d0',
                            padding: 12, borderRadius: 10,
                            width: '43%'
                        }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#475562', fontSize: 14 }}>Chi tiêu</Text>
                                <MinusIcon height='24' width='24' color='#e00' />
                            </View>
                            <Text style={{ color: '#fff', fontSize: 16 }}>2.470.000 đ</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen
import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { FONTS, SIZES, STYLES } from '../assets/constants/theme';
import { ArrowRightIcon, MoneyIcon } from '../assets/icons';
import { PopupSlideModal } from '../components';
import { hashtags } from '../../server/fake';

const HistoryScreen = ({ navigation }) => {

    const TAB_NAME = 'lịch sử', CHOICE = 'chọn túi', YOUR_TAGS = 'nhãn của bạn', VIEW_ALL = 'Xem tất cả';
    const DEFAULT_JAR = { id: 0, name: 'Tất cả các túi', color: '#5906dfa6' };
    const TAGS = hashtags + hashtags;

    const [seletedJar, setSelectedJar] = useState(DEFAULT_JAR);
    const [isShowPopup, setShowPopup] = useState(false);

    const ref_popup = useRef();

    function renderTagItem(item) {
        console.log(item);
        return <View style={{ padding: SIZES.base }}>
            <Text style={{ ...FONTS.body2, color: '#808080' }}>#{item}</Text>
        </View>
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={{ ...STYLES.shadow }}>
                <PopupSlideModal
                    ref={ref_popup}
                    bgColor='#ffedbb'
                    btnColor='#fed24b'
                    btnTextColor='#808080'
                    visible={isShowPopup}
                    close={() => setShowPopup(false)}
                    handle={(value) => { console.log(value); setSelectedJar(value) }}
                />
                <Text style={{
                    ...FONTS.h1,
                    color: '#ffc20f',
                    fontSize: 32,
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    marginTop: 20
                }}>{TAB_NAME}</Text>

                <TouchableOpacity
                    onPress={() => {
                        ref_popup.current.showAll();
                        setShowPopup(!isShowPopup);
                    }}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: '#fed24b',
                        padding: SIZES.padding,
                        margin: SIZES.padding,
                        borderRadius: SIZES.radius,
                        ...STYLES.shadow,
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{
                            height: 60, width: 60,
                            backgroundColor: seletedJar.color,
                            borderRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...STYLES.shadow
                        }}>
                            <MoneyIcon color='#fff' height='32' width='32' />
                        </View>
                        <View style={{ marginLeft: SIZES.radius }}>
                            <Text style={{ ...FONTS.h2, color: '#000' }}>{CHOICE}</Text>
                            <Text style={{ ...FONTS.h3, color: '#000' }}>{seletedJar.name}</Text>
                        </View>
                    </View>
                    <View>
                        <ArrowRightIcon color='#000' height='32' width='32' />
                    </View>
                </TouchableOpacity>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: SIZES.padding,
                    marginBottom: SIZES.padding
                }}>
                    <Text style={{ ...FONTS.body2, color: '#707070' }}>{YOUR_TAGS}</Text>
                    <TouchableOpacity>
                        <Text style={{ ...FONTS.h3, color: '#707070' }}>{VIEW_ALL}</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={TAGS}
                    renderItem={({ item }) => renderTagItem(item)}
                />

            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: '#ffedbb' }}
            >
                <View style={{ padding: 20, backgroundColor: '#ffc20f', marginTop: 160 }} />
                <View style={{ padding: 20, backgroundColor: '#fed24b', marginTop: 160 }} />
                <View style={{ padding: 20, backgroundColor: '#ffdf82', marginTop: 160 }} />
                <View style={{ padding: 20, backgroundColor: '#ffedbb', marginTop: 160 }} />
            </ScrollView>
        </SafeAreaView>

    )
}

export default HistoryScreen
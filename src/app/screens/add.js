import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Text,
    View,
    TouchableOpacity,
    ToastAndroid,
    FlatList,
    ScrollView,
    TextInput,
    LogBox
} from 'react-native';
LogBox.ignoreAllLogs();
import { FONTS, SIZES } from '../assets/constants/theme';
import { formatMoney } from '../utils';
import CurrencyInput from 'react-native-currency-input';
import { ArrowRightIcon, CalendarIcon, CloseIcon, EditIcon, MoneyIcon, RefreshIcon, SaveIcon, TagIcon } from '../assets/icons';
import { jars, hashtags } from '../../server/fake';

const AddScreen = ({ navigation }) => {

    const [selectedFuntion, setFuntion] = useState(1);
    const [caculator, setCatucator] = useState('=');
    const [isShowCatu, setShowCatu] = useState(false);
    const [amout, setAmout] = useState(undefined);
    const [subAmout, setSubAmout] = useState(undefined);
    const [note, setNote] = useState('');
    const [hashtag, setHashTag] = useState('');
    const [tagsList, setTagsList] = useState([]);

    const ref_input = useRef();
    const ref_flatList_selected = useRef();

    useEffect(() => {
        console.log(tagsList);
        ref_flatList_selected.current.scrollToEnd();
    }, [tagsList])


    function renderCatulator() {

        const btnStyle = {
            borderWidth: .8,
            alignItems: 'center',
            justifyContent: 'center',
            width: SIZES.width * .16,
            height: SIZES.width * .16,
            marginVertical: 6,
            borderRadius: 12,
            borderColor: '#fff',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 1,
            backgroundColor: '#00a88f47'
        }

        const pressCaculator = (key) => {
            try {
                if (key == '=') {
                    const t = amout.toString() + caculator + subAmout.toString();
                    setAmout(eval(t));
                    console.log(t);
                    setSubAmout(undefined);
                    setShowCatu(false);
                }
                setCatucator(key);
            } catch (err) {
                setShowCatu(false);
                setCatucator('=');
                ToastAndroid.showWithGravity('Phép tính không chính xác!', ToastAndroid.LONG, ToastAndroid.CENTER);
            }
        }

        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity
                    onPress={() => { pressCaculator('+') }}
                    style={{
                        ...btnStyle
                    }}>
                    <Text style={{ fontSize: 42, color: '#000', color: '#fff' }}>{'+'}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { pressCaculator('-') }}
                    style={{
                        ...btnStyle
                    }}>
                    <Text style={{ fontSize: 42, color: '#000', color: '#fff' }}>{'-'}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { pressCaculator('*') }}
                    style={{
                        ...btnStyle
                    }}>
                    <Text style={{ fontSize: 42, color: '#000', color: '#fff' }}>{'*'}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { pressCaculator('/') }}
                    style={{
                        ...btnStyle
                    }}>
                    <Text style={{ fontSize: 42, color: '#000', color: '#fff' }}>{'/'}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { pressCaculator('=') }}
                    style={{
                        ...btnStyle,
                        borderColor: '#a80000a6'
                    }}>
                    <Text style={{ fontSize: 42, color: '#000', color: '#fff' }}>{'='}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    function renderJarPicker(jar) {

        return (
            <TouchableOpacity style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: .8,
                borderBottomColor: '#fff',
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: jar.color, alignItems: 'center', justifyContent: 'center' }}>
                        <MoneyIcon color='#fff' width='22' height='22' />
                    </View>
                    <Text style={{
                        ...FONTS.h2,
                        fontSize: 18,
                        color: '#000',
                        marginLeft: 16
                    }}>{jar.name}</Text>
                </View>
                <ArrowRightIcon color='#3b3b3bd1' />
            </TouchableOpacity>
        )
    }

    function renderCalendarPicker() {

        return (
            <View style={{
                borderBottomWidth: .8,
                borderBottomColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 12
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <View style={{ marginHorizontal: 18 }}><CalendarIcon color='#859498' width='42' height='42' /></View>
                    <TouchableOpacity>
                        <Text style={{ ...FONTS.body2, fontSize: 16, color: '#000' }}>thứ 2, Ngày 21 tháng 2 năm 2022</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                    <View style={{ borderRightWidth: 1, borderColor: '#fff', height: 32, marginRight: 6 }} />
                    <TouchableOpacity style={{ marginRight: 18 }}>
                        <RefreshIcon color='#fff' width='26' height='26' />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    function renderEditForm() {

        return (
            <View style={{
                borderBottomWidth: .8,
                borderBottomColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 8
            }}>
                <View style={{ paddingHorizontal: 20 }}><EditIcon color='#859498' width='42' height='42' /></View>
                <TextInput
                    placeholder="Mô tả ..."
                    placeholderTextColor={'#5555555c'}
                    multiline={true}
                    style={{ ...FONTS.body3, fontSize: 20, width: SIZES.width * .7, color: '#000' }}
                    value={note}
                    onChangeText={(value) => setNote(value)} />
            </View>
        );
    }

    function renderAddHashtag() {

        const pressTag = (tag) => {
            if (tagsList.length < 6) {

                tag = tag.toLowerCase();
                if (tagsList.indexOf(tag.toLowerCase()) > -1)
                    pressRemoveTag(tag);
                setTagsList(old => [...old, tag.toLowerCase()])
            } else {
                ToastAndroid.showWithGravity('Chỉ có thể thêm tối đa 6 nhãn dán!', ToastAndroid.LONG, ToastAndroid.CENTER);
            }
        }

        const pressRemoveTag = (tag) => {
            tag = tag.toLowerCase();
            let tmp = tagsList;
            let nl = removeItem(tmp, tag.toLowerCase());
            setTagsList([...nl]);

        }

        const checkHashtagInput = (value) => {
            const char = value.substr(value.length - 1);
            if (char == ' ') {
                pressTag(hashtag);
                setHashTag('');
            } else { setHashTag(value); }
        }

        const removeItem = (arr, item) => {
            var i = arr.indexOf(item); if (i > -1) arr.splice(i, 1); return arr;
        }

        function renderSelectedTags() {
            return (<FlatList
                showsHorizontalScrollIndicator={false}
                ref={ref_flatList_selected}
                horizontal={true}
                data={tagsList}
                renderItem={({ item }) => renderItemSelectedTag(item)} />)
        }

        function renderItemSelectedTag(tag) {
            return <TouchableOpacity
                onPress={() => pressRemoveTag(tag)}
                style={{
                    padding: 6, borderRadius: 12,
                    paddingHorizontal: 16, alignSelf: 'center',
                    backgroundColor: '#d14b4b', margin: 10,
                    maxWidth: SIZES.width * .32,
                    paddingRight: 12
                }}
            >
                <View style={{ position: 'absolute', right: -5, top: -5, backgroundColor: '#d7f5f1', borderRadius: 20 }}>
                    <CloseIcon color='#d14b4b' width='20' height='20' /></View>
                <Text
                    style={{
                        ...FONTS.body2, fontSize: 18, color: '#d7f5f1'
                    }}>#{tag}</Text>
            </TouchableOpacity>
        }

        return (
            <View>
                {renderSelectedTags()}
                {/** Ex hashtags list */}
                <FlatList
                    scrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled={false}
                    data={hashtags}
                    horizontal={true}
                    keyExtractor={(index) => index + Math.random()}
                    renderItem={({ item }) => {
                        return (
                            <View key={item + Math.random()}>
                                <TouchableOpacity
                                    onPress={() => pressTag(item)}
                                    style={{
                                        padding: 6, borderRadius: 12,
                                        paddingHorizontal: 16, alignSelf: 'center',
                                        backgroundColor: '#7ad2c4', margin: 10,
                                        maxWidth: SIZES.width * .32
                                    }}
                                >
                                    <Text
                                        style={{
                                            ...FONTS.body2, fontSize: 18, color: '#d7f5f1'
                                        }}>#{item}</Text>
                                </TouchableOpacity>
                            </View>)
                    }}

                />
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 8
                }}>
                    <View style={{ paddingHorizontal: 20 }}><TagIcon color='#859498' width='42' height='42' /></View>
                    <TextInput
                        placeholder="Thêm nhãn"
                        placeholderTextColor={'#5555555c'}
                        multiline={true}
                        style={{ ...FONTS.body3, fontSize: 20, width: SIZES.width * .7, color: '#000' }}
                        value={hashtag}
                        onChangeText={(value) => checkHashtagInput(value)} />
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingBottom: 12,
                backgroundColor: '#fff',
                shadowColor: "#00a88f",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
            }}>
                <Text style={{
                    ...FONTS.h2,
                    fontSize: 32,
                    color: '#00a88f',
                    textTransform: 'uppercase',
                    paddingTop: 40,
                }}>Thêm giao dịch</Text>
                {/** Save button */}
                <TouchableOpacity
                    onPress={() => console.log(`Save`)}
                    style={{
                        alignSelf: 'flex-end',
                        flexDirection: 'row', alignItems: 'center',
                        padding: 12,
                        borderRadius: 12, backgroundColor: '#40bdab',
                        shadowColor: "#00a88f",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.34,
                        shadowRadius: 6.27,
                        elevation: 10,
                    }}>
                    <SaveIcon color='#fff' width='28' height='28' />
                </TouchableOpacity>
            </View>
            <ScrollView
                nestedScrollEnabled={false}
                style={{ marginBottom: 120, flexGrow: 1 }}>

                {/** Select bar */}
                <View style={{
                    backgroundColor: '#4245445c',
                    flexDirection: 'row',
                    marginHorizontal: 12,
                    marginVertical: 24,
                    borderRadius: 45,
                    borderWidth: 1,
                    borderColor: '#00a88f',
                    justifyContent: 'space-between'
                }}>
                    <TouchableOpacity
                        onPress={() => { setFuntion(2) }}
                        style={{
                            padding: 4,
                            backgroundColor: selectedFuntion == 2 ? '#19cf27' : '#00000000',
                            borderRadius: 45
                        }}>
                        <Text style={{
                            ...FONTS.body2,
                            color: '#ffffff',
                            fontSize: 20,
                            paddingHorizontal: SIZES.width * 0.06
                        }}>Thu nhập</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { setFuntion(1) }}
                        style={{
                            padding: 4,
                            backgroundColor: selectedFuntion == 1 ? '#ec4c5f' : '#00000000',
                            borderRadius: 45
                        }}>
                        <Text style={{
                            ...FONTS.body2,
                            color: '#ffffff',
                            fontSize: 20,
                            paddingHorizontal: SIZES.width * 0.08
                        }}>Chi tiêu</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { setFuntion(0) }}
                        style={{
                            padding: 4,
                            backgroundColor: selectedFuntion == 0 ? '#12baba' : '#00000000',
                            borderRadius: 45
                        }}>
                        <Text style={{
                            ...FONTS.body2,
                            color: '#ffffff',
                            fontSize: 20,
                            paddingHorizontal: SIZES.width * 0.06
                        }}>Chuyễn hũ</Text>
                    </TouchableOpacity>

                </View>

                <View style={{
                    padding: 6,
                    backgroundColor: '#00a88f47',
                    margin: 6,
                    borderRadius: 12
                }}>
                    <View style={{
                        flexDirection: 'row',
                        borderBottomWidth: .8,
                        borderBottomColor: '#fff',
                        justifyContent: 'space-between'
                    }}>
                        <CurrencyInput
                            style={{
                                ...FONTS.body1,
                                color: '#000',
                                padding: 10,
                                marginTop: 12,
                                width: SIZES.width * .8
                            }}
                            onFocus={() => setShowCatu(true)}
                            minValue={0}
                            maxValue={999999999999}
                            value={amout}
                            onChangeValue={(value) => setAmout(value)}
                            delimiter=","
                            separator="."
                            precision={0}
                            placeholder='Ví dụ: 361,008  '
                            placeholderTextColor={'#5555555c'}
                        />
                        <View style={{
                            backgroundColor: '#00a88f',
                            alignItems: 'center', justifyContent: 'center',
                            height: 44, width: 44, borderRadius: 12
                        }}>
                            <Text style={{
                                ...FONTS.h1,
                                color: '#fff',
                                fontSize: 34,
                            }}>{'đ'}</Text>
                        </View>
                    </View>
                    {
                        caculator != '=' &&
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{
                                ...FONTS.body1,
                                padding: 20,
                                color: '#000'
                            }}>{caculator}</Text>
                            <CurrencyInput
                                autoFocus={true}
                                ref={ref_input}
                                style={{
                                    ...FONTS.body1,
                                    color: '#000',
                                    padding: 10,
                                    marginTop: 12,
                                }}
                                placeholder='0'
                                minValue={0}
                                maxValue={999999999999}
                                value={subAmout}
                                onChangeValue={(value) => setSubAmout(value)}
                                delimiter=","
                                separator="."
                                precision={0}
                            />
                        </View>

                    }

                    {isShowCatu && renderCatulator()}
                    {renderJarPicker(jars[0])}
                    {renderCalendarPicker()}
                    {renderEditForm()}
                    {renderAddHashtag()}

                </View>


                <View style={{ padding: 20, backgroundColor: '#00a88f', marginTop: 600 }} />
                <View style={{ padding: 20, backgroundColor: '#40bdab' }} />
                <View style={{ padding: 20, backgroundColor: '#7ad2c4' }} />
                <View style={{ padding: 20, backgroundColor: '#b5e6e0' }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddScreen
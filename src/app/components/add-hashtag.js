import { View, Text, FlatList, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';
import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { CloseIcon, TagIcon } from '../assets/icons';
import { hashtags } from '../../server/fake';
import { FONTS, SIZES } from '../assets/constants/theme';

const AddHashTag = (props, ref) => {

    // Raw data
    var exHashtags = hashtags;

    // States
    const [hashtag, setHashTag] = useState('');
    const [tagsList, setTagsList] = useState([]);

    //Refs
    const ref_flatList_selected = useRef();

    // Effects
    useEffect(() => {
        ref_flatList_selected.current.scrollToEnd();
    }, [tagsList])

    useImperativeHandle(ref, () => ({

        clear() { setHashTag(''); setTagsList([]) },
        report() { props.res(tagsList) }

    }))

    // Consts
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

    // Functions render
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

    // Main view
    return (
        <View>
            {renderSelectedTags()}
            {/** Ex hashtags list */}
            <FlatList
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={false}
                data={exHashtags}
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

export default forwardRef(AddHashTag)
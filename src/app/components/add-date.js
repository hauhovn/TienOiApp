import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useImperativeHandle, forwardRef } from 'react'
import { CalendarIcon, RefreshIcon } from '../assets/icons';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import 'moment/locale/vi';
import { FONTS, SIZES } from '../assets/constants/theme';


const AddDate = (props, ref) => {


    const [date, setDate] = useState(new Date());
    const [isOpenDate, setOpenDate] = useState(false);

    useImperativeHandle(ref, () => ({
        reset() { setDate(new Date()) },
        report() { props.res(date) }
    }))

    return (
        <TouchableOpacity onPress={() => setOpenDate(!isOpenDate)} style={{
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.radius,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: .8,
            borderBottomColor: '#fff',
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <CalendarIcon color='#000000a6' width='42' height='42' />
                </View>
                <Text
                    style={{
                        ...FONTS.body2, fontSize: 16, color: '#000000a6', marginLeft: SIZES.radius
                    }}>{moment(date).format('dddd')},   {moment(date).format('LL')}</Text>

            </View>
            <TouchableOpacity onPress={() => setDate(new Date())}>
                <RefreshIcon color='#3b3b3bd1' height='28' width='28' />
            </TouchableOpacity>
            <DatePicker
                modal
                open={isOpenDate}
                date={date}
                mode='date'
                title="Chọn ngày"
                fadeToColor='#fff'
                theme="light"
                textColor="#fff"
                onConfirm={(date) => {
                    setOpenDate(false)
                    setDate(date)
                    console.log(date);
                }}
                onCancel={() => {
                    setOpenDate(false)
                }}
            />
        </TouchableOpacity>
    );
}

export default forwardRef(AddDate)
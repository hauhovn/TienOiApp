import { View, Text, ToastAndroid, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react'
import { FONTS, SIZES } from '../assets/constants/theme'
import CurrencyInput from 'react-native-currency-input';

const AddAmount = (props, ref) => {

    const [caculator, setCatucator] = useState('=');
    const [isShowCatu, setShowCatu] = useState(false);
    const [amount, setAmount] = useState(undefined);
    const [subAmount, setSubAmount] = useState(undefined);

    const ref_input = useRef();

    useImperativeHandle(ref, () => ({
        clear() {
            setCatucator('=');
            setShowCatu(false);
            setAmount(undefined);
            setSubAmount(undefined);
        },
        report() { props.res(amount); }
    }));

    return (
        <View>
            <View style={styles.amountBox}>
                <CurrencyInput
                    style={styles.inputAmount}
                    onFocus={() => setShowCatu(true)}
                    minValue={0}
                    maxValue={999999999999}
                    value={amount}
                    onChangeValue={(value) => setAmount(value)}
                    delimiter=","
                    separator="."
                    precision={0}
                    placeholder='Ví dụ: 361,008  '
                    placeholderTextColor={'#5555555c'}
                />
                <View style={styles.dongIconBox}>
                    <Text style={{ ...FONTS.h1, color: '#fff', fontSize: 34, }}>{'đ'}</Text>
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
                        value={subAmount}
                        onChangeValue={(value) => setSubAmount(value)}
                        delimiter=","
                        separator="."
                        precision={0}
                    />
                </View>
            }
            {isShowCatu && renderCatulator()}
        </View>
    )

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
                    const t = amount.toString() + caculator + subAmount.toString();
                    setAmount(eval(t));
                    console.log(t);
                    setSubAmount(undefined);
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


}

export default forwardRef(AddAmount);


const styles = StyleSheet.create({
    amountBox: {
        flexDirection: 'row',
        borderBottomWidth: .8,
        borderBottomColor: '#fff',
        justifyContent: 'space-between',
        marginTop: SIZES.radius
    },
    inputAmount: {
        ...FONTS.body1,
        color: '#000',
        padding: 10,
        marginTop: 12,
        width: SIZES.width * .8
    },
    dongIconBox: {
        backgroundColor: '#00a88f',
        alignItems: 'center', justifyContent: 'center',
        height: 44, width: 44, borderRadius: 12
    },
})


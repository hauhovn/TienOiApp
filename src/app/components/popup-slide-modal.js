import { View, Text, Modal, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React, { useState, useImperativeHandle, forwardRef } from 'react'
import { FONTS, SIZES, STYLES } from '../assets/constants/theme'
import { jars } from '../../server/fake'
import { CheckmarkIcon, MoneyIcon } from '../assets/icons'
import { formatMoney } from '../utils';
import { VND } from '../assets/constants';

const PopupSlideModal = ({ visible, close, handle, all }, ref) => {

    const modalHeight = SIZES.height * .5;
    const CHOISE_JAR = 'Chọn loại túi';
    const DES = 'Bấm vào biểu tượng túi cần chọn để chi tiêu';
    const AMOUT = 'Số dư khả dụng';
    const COMFORM = 'Xác nhận';
    const ALL = 'Tất cả';
    const JARS = jars;

    const [jarList, setJarList] = useState(JARS);
    const [selectedJar, setSelectJar] = useState(jars[0]);

    useImperativeHandle(ref, () => ({
        reset() { setJarList(JARS); setSelectJar(jarList[0]); console.log(`popup reset`); },
        showAll() { addAllJar(); setJarList(addAllJar()) }
    }));

    const addAllJar = () => {
        let sum = 0;
        jars.forEach(jar => {
            sum += jar.amount;
        });
        const all = { id: 0, name: ALL, amount: sum, color: '#5906dfa6' };
        setSelectJar(all);
        selectedJar != all && handle(all);
        return [all, ...jars];
    }


    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType='slide'
            onRequestClose={() => close(true)}

        >
            {/** Dismis modal */}
            <TouchableWithoutFeedback onPress={() => close(true)}>
                <View style={{ flex: 1, backgroundColor: '#00000' }} />
            </TouchableWithoutFeedback>

            {/** Modal box */}
            <View style={{
                width: SIZES.width,
                position: 'absolute',
                bottom: 0,
                backgroundColor: '#7ad2c4',
                borderTopLeftRadius: SIZES.radius,
                borderTopRightRadius: SIZES.radius,
                ...STYLES.shadow
            }}>
                {/** Horizontal bar ion */}
                <View style={{
                    height: 4, width: SIZES.width * .25, backgroundColor: '#d1f7f2cf',
                    marginVertical: SIZES.padding, alignSelf: 'center',
                    borderRadius: SIZES.padding
                }} />

                <View style={{ paddingHorizontal: SIZES.padding }}>
                    <Text style={{
                        ...FONTS.h2, color: '#1e1e1ee6', fontSize: 30, lineHeight: 42
                    }}>{CHOISE_JAR}</Text>
                    <Text style={{
                        ...FONTS.h3, color: '#1e1e1e59', marginBottom: SIZES.radius, maxWidth: SIZES.width * .9
                    }}>{DES}</Text>

                    {/** jars list */}
                    {jarList.map((jar) => {
                        return (
                            <View key={jar.id} style={{ flexDirection: 'row', marginBottom: SIZES.radius / 2, alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => setSelectJar(jar)}
                                    style={{
                                        borderWidth: selectedJar == jar ? 2 : selectedJar.name == ALL ? 2 : 0,
                                        ...STYLES.shadow, borderColor: '#fff',
                                        padding: SIZES.radius, backgroundColor: jar.color, alignSelf: 'flex-end',
                                        borderRadius: SIZES.radius, height: 45, width: 45, alignItems: 'center', justifyContent: 'center'
                                    }}>
                                    <MoneyIcon height='18' width='18' color={'#ffffffb8'} />
                                    {
                                        selectedJar == jar && <View style={{
                                            position: 'absolute', right: -8, top: -8,
                                            borderRadius: 20, borderWidth: 2, borderColor: '#fff',
                                            backgroundColor: jar.color
                                        }}>
                                            <CheckmarkIcon width='18' height='18' color='#ffffffb8' />
                                        </View>
                                    }
                                </TouchableOpacity>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'space-between', width: SIZES.width - 4 * SIZES.padding,
                                    alignItems: 'center', borderBottomWidth: .8, borderColor: '#ffffffb8', marginLeft: SIZES.radius,
                                }}>
                                    <Text style={{ ...FONTS.h1, fontSize: jar.name == ALL ? 25 : 18, lineHeight: jar.name == ALL ? 27 : 20, color: jar.name == ALL ? '#000' : '#1e1e1e9c' }}>{jar.name}</Text>
                                    <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                        {jar.name != ALL && <Text style={{ ...FONTS.body3, color: '#1e1e1e59' }}>{AMOUT}</Text>}
                                        <Text style={{ ...FONTS.h4, color: jar.name == ALL ? '#000' : '#1e1e1ec2', fontSize: jar.name == ALL ? 20 : 16, lineHeight: jar.name == ALL ? 27 : 25 }}>{formatMoney(jar.amount)} {VND}</Text>
                                    </View>
                                </View>
                            </View>)
                    })}

                    <TouchableOpacity
                        onPress={() => {
                            handle(selectedJar);
                            close(true);
                        }}
                        style={{
                            backgroundColor: '#008571',
                            borderRadius: SIZES.radius,
                            alignItems: 'center',
                            marginVertical: SIZES.radius / 2,
                            ...STYLES.shadow, marginTop: SIZES.radius
                        }}>
                        <Text style={{
                            paddingVertical: SIZES.radius / 2,
                            ...FONTS.body2, color: '#f1f1f1'
                        }}>{COMFORM}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default forwardRef(PopupSlideModal)
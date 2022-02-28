import { View, Text, TouchableOpacity } from 'react-native'
import React, { useImperativeHandle, forwardRef, useState } from 'react'
import { PopupSlideModal } from '.';
import { jars } from '../../server/fake';
import { ArrowRightIcon, MoneyIcon } from '../assets/icons';
import { FONTS, SIZES, STYLES } from '../assets/constants/theme';
import { formatMoney } from '../utils';
import { VND } from '../assets/constants';

const AddJar = (props, ref) => {

    var JARS = jars;

    const [selectedJar, setSelectedJar] = useState(JARS[0]);
    const [isShowPopup, setShowPopup] = useState(false);
    const [isShowAllSelectedJar, setAllSelectedJar] = useState(false);

    useImperativeHandle(ref, () => ({

        close() { setShowPopup(false) },
        report() { props.res(selectedJar) }

    }))

    return (
        <TouchableOpacity
            onPress={() => { setShowPopup(!isShowPopup) }}
            style={{
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.radius,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: .8,
                borderBottomColor: '#fff',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{
                    width: 40, height: 40,
                    borderRadius: 12,
                    backgroundColor: selectedJar.color,
                    alignItems: 'center', justifyContent: 'center', ...STYLES.shadow
                }}>
                    <MoneyIcon color='#fff' width='22' height='22' />
                </View>
                <Text style={{
                    ...FONTS.h2,
                    fontSize: 18,
                    color: '#000000a6',
                    marginLeft: SIZES.radius
                }}>{selectedJar.name}  ({formatMoney(selectedJar.amount)} {VND})</Text>
            </View>
            <ArrowRightIcon color='#3b3b3bd1' height='28' width='28' />

            <PopupSlideModal
                all={isShowAllSelectedJar}
                visible={isShowPopup}
                close={() => setShowPopup(false)}
                handle={(jar) => { setSelectedJar(jar); console.log(jar); }}
            />
        </TouchableOpacity>
    )

}

export default forwardRef(AddJar)
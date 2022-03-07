import { View, Text, TouchableOpacity } from 'react-native'
import React, { useImperativeHandle, forwardRef, useState, useRef } from 'react'
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

    const ref_popup = useRef();

    useImperativeHandle(ref, () => ({

        close() { setShowPopup(false) },
        report() { props.res(selectedJar) },
        reset() {
            JARS.length > 6 ? setSelectedJar(JARS[1]) : setSelectedJar([JARS[0]]);
            ref_popup.current.reset();
        },
        setIndex(index) { try { setSelectedJar(JARS[index]) } catch (err) { this.reset() } },
        showSumJars() { console.log(`SUM: `, sumJars(JARS)); setSelectedJar(sumJars(JARS)) },


    }))

    if (JARS.length < 7 && props?.isShowAll) {
        setSelectedJar(sumJars());
    }

    const sumJars = (_jars) => {
        if (_jars.length > 6) return _jars;
        let sum = 0;
        _jars.forEach(e => {
            sum += e.amount;
        });

        return { id: '0', name: 'Tất cả', amount: sum, color: '#5906dfa6' };
    }

    return (
        <TouchableOpacity
            onPress={() => {

                if (selectedJar.id == sumJars(JARS).id) {
                    ref_popup.current.showAll();
                }; setShowPopup(!isShowPopup);
            }}
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
                ref={ref_popup}
                all={true}
                visible={isShowPopup}
                close={() => setShowPopup(false)}
                handle={(jar) => { setSelectedJar(jar); console.log(jar); }}
            />
        </TouchableOpacity>
    )

}

export default forwardRef(AddJar)
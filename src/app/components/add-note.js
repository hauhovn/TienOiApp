import { View, TextInput } from 'react-native';
import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { EditIcon } from '../assets/icons';
import { FONTS, SIZES } from '../assets/constants/theme';

const AddNote = (props, ref) => {


    const [note, setNote] = useState('');

    useImperativeHandle(ref, () => ({
        clear() { setNote('') },
        report() { props.res(note) }
    }));

    return (
        <View style={{
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.radius,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: .8,
            borderBottomColor: '#fff',
        }}>
            <EditIcon color='#859498' width='42' height='42' />
            <TextInput
                placeholder="Mô tả ..."
                placeholderTextColor={'#5555555c'}
                multiline={true}
                style={{ ...FONTS.body3, fontSize: 20, width: SIZES.width * .7, color: '#000000a6' }}
                value={note}
                onChangeText={(value) => setNote(value)} />
        </View>
    );
}

export default forwardRef(AddNote)
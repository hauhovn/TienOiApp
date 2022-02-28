import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, TouchableOpacity, ScrollView, LogBox, StyleSheet } from 'react-native';
LogBox.ignoreAllLogs();
import { FONTS, SIZES, STYLES } from '../assets/constants/theme';
import { SaveIcon } from '../assets/icons';
import { AddHashTag, AddNote, AddDate, AddAmount, AddJar } from '../components';

const AddScreen = ({ navigation }) => {

    const SPENT = 'spent_action', ADD = 'add_action', CHANGE = 'change_action';

    const [selectedAction, setAction] = useState(SPENT);
    const [Data, setData] = useState(new Object());

    const ref_amount = useRef();
    const ref_tags = useRef();
    const ref_note = useRef();
    const ref_jar = useRef();
    const ref_date = useRef();

    useEffect(() => {
        console.log(`Funtion: `, selectedAction);
        if (selectedAction == ADD) {
            clearRef();
        }
        if (selectedAction == SPENT) {
            clearRef();
        }
        if (selectedAction == CHANGE) {
            clearRef();
        }
    }, [selectedAction])


    const clearRef = () => {
        ref_tags.current.clear();
        ref_note.current.clear();
        ref_amount.current.clear();
        ref_jar.current.close();
        ref_date.current.reset();
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <Text style={{
                    ...FONTS.h2,
                    fontSize: 32,
                    color: '#00a88f',
                    textTransform: 'uppercase',
                    paddingTop: 40,
                }}>Thêm giao dịch</Text>
                {/** Save button */}
                <TouchableOpacity
                    onPress={() => {
                        ref_tags.current.report();
                        ref_note.current.report();
                        ref_amount.current.report();
                        ref_jar.current.report();
                        ref_date.current.report();
                        console.log(Data);
                    }}
                    style={styles.btnSave}>
                    <SaveIcon color='#fff' width='28' height='28' />
                </TouchableOpacity>
            </View>
            <ScrollView
                nestedScrollEnabled={false}
                style={{ marginBottom: 120, flexGrow: 1 }}>

                {/** Select bar */}
                <View style={styles.selectBar}>
                    <TouchableOpacity
                        onPress={() => { setAction(ADD) }}
                        style={{
                            padding: 4,
                            backgroundColor: selectedAction == ADD ? '#19cf27' : '#00000000',
                            borderRadius: 45
                        }}>
                        <Text style={{
                            ...styles.optionText,
                            paddingHorizontal: SIZES.width * 0.06
                        }}>Thu nhập</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { setAction(SPENT) }}
                        style={{
                            padding: 4,
                            backgroundColor: selectedAction == SPENT ? '#ec4c5f' : '#00000000',
                            borderRadius: 45
                        }}>
                        <Text style={{
                            ...styles.optionText,
                            paddingHorizontal: SIZES.width * 0.08
                        }}>Chi tiêu</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { setAction(CHANGE) }}
                        style={{
                            padding: 4,
                            backgroundColor: selectedAction == CHANGE ? '#12baba' : '#00000000',
                            borderRadius: 45
                        }}>
                        <Text style={{
                            ...styles.optionText,
                            paddingHorizontal: SIZES.width * 0.06
                        }}>Chuyễn hũ</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.box}>

                    <AddAmount
                        ref={ref_amount}
                        res={(data) => {
                            let old = Data;
                            old.amount = data;
                            setData(old);
                        }} />

                    <AddJar
                        ref={ref_jar}
                        res={(data) => {
                            let old = Data;
                            selectedAction == CHANGE ?
                                old.formJar = data :
                                old.jar = data;
                            setData(old);
                        }} />

                    {selectedAction == CHANGE &&
                        <AddJar
                            ref={ref_jar}
                            res={(data) => {
                                let old = Data;
                                old.toJar = data;
                                setData(old);
                            }} />
                    }

                    <AddDate
                        ref={ref_date}
                        res={(data) => {
                            let old = Data;
                            old.amount = data;
                            setData(old);
                        }} />


                    <AddNote
                        ref={ref_note}
                        res={(data) => {
                            let old = Data;
                            old.note = data;
                            setData(old);
                        }} />

                    <AddHashTag
                        ref={ref_tags}
                        res={(data) => {
                            let old = Data;
                            old.tags = data;
                            setData(old);
                        }} />

                </View>
                <View style={{ padding: 20, backgroundColor: '#00a88f', marginTop: 600 }} />
                <View style={{ padding: 20, backgroundColor: '#40bdab' }} />
                <View style={{ padding: 20, backgroundColor: '#7ad2c4' }} />
                <View style={{ padding: 20, backgroundColor: '#b5e6e0' }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddScreen;

const styles = StyleSheet.create({
    container: {
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
    },
    optionText: {
        ...FONTS.body2,
        color: '#ffffff',
        fontSize: 20,
    },
    selectBar: {
        backgroundColor: '#4245445c',
        flexDirection: 'row',
        marginHorizontal: 12,
        marginVertical: 24,
        borderRadius: 45,
        borderWidth: 1,
        borderColor: '#00a88f',
        justifyContent: 'space-between'
    },

    box: {
        padding: 6,
        backgroundColor: '#00a88f47',
        margin: 6,
        borderRadius: 12
    },
    btnSave: {
        alignSelf: 'flex-end',
        flexDirection: 'row', alignItems: 'center',
        padding: 12,
        borderRadius: 12, backgroundColor: '#ffc20f',
        ...STYLES.shadow
    },

})
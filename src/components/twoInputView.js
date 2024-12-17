import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomDropdown from './CustomDropdown'
import { dropdownData, numberDropDown } from '../constant/ConstantData'

const twoInputView = ({handleDropdown}) => {
    return (
        <View style={styles.twoInputView}>
            <View style={styles.inputBox}>
                <CustomDropdown title={'Unit Type'} data={dropdownData} onSelect={handleDropdown} />
            </View>
            <View style={styles.inputBox}>
                <CustomDropdown title={'Type Value'} data={numberDropDown} onSelect={handleDropdown} />
            </View>
        </View>
    )
}

export default twoInputView

const styles = StyleSheet.create({
    twoInputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        width: '100%'
    },
    inputBox: {
        width: '50%',
        // borderWidth: 1
    }
})
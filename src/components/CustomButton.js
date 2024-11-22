import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import CustomeText from './CustomeText'
import Color from '../constant/Color'

const CustomButton = ({style,title='button',onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonView,style]}>
            <CustomeText title={title} style={styles.button} />
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonView: {
        alignItems: 'center',
        borderRadius: 15,
        width: '100%',
        backgroundColor: Color.primaryColor
    },
    button: {
        fontSize: 16,
        padding: 14,
        color: Color.white,
    }
})
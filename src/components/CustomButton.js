import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constant/Color'
import CustomeText from './CustomeText'

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
        width: '90%',
        backgroundColor: Colors.primaryColor
    },
    button: {
        fontSize: 16,
        padding: 14,
        color: Colors.white,
    }
})
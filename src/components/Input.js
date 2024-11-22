import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import CustomeText from './CustomeText'

const Input = ({ onChangeText, placeholder, value, title ,style,placeholderTextColor="#888"}) => {
    return (
        <View style={styles.container}>
            {title && 
             <View style={styles.titleView}>
             <CustomeText title={title} />
         </View>
            }
           
            <TextInput
                onChangeText={onChangeText}
                placeholder={placeholder}
                value={value}
                style={[styles.inputText,style]}
                // placeholderTextColor="#888" 
                placeholderTextColor={placeholderTextColor}
                // Change this for custom placeholder color
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    titleView:{
        margin:5
    },
    container: {
        width: '100%',
        marginVertical: 10,
        paddingHorizontal: 15,
    },
    inputText: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#333', // Change this for custom text color
        backgroundColor: '#f9f9f9', // Customize background color here
    },
})

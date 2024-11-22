import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomeText from '../../components/CustomeText'
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/Input'
import CustomButton from '../../components/CustomButton'
import ImageUrls from '../../constant/Images'
import Color from '../../constant/Color'


const Login = () => {
    const navigation = useNavigation();
    const loginMethod =()=>{
        navigation.replace('Home')
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.logoView}>
                <Image source={ImageUrls.logo} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.welcomHeading}>
                <CustomeText title={'Welcome!'} style={styles.headingText} />
            </View>
            <Input placeholder={'Enter your Email'} />
            <Input placeholder={'Enter your Password'} />


            <TouchableOpacity>
            <CustomeText title={'Forgot Passowrd ?'} style={{ padding: 10, marginLeft: 10, color: Color.primaryColor }} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center', marginBottom: 30, paddingTop: 20,width:'95%',alignSelf:'center' }}>
                <CustomButton title='Login' onPress={loginMethod} />
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    logoView: {
        // flex:4,
        height: 90,
        marginBottom: 20,
        alignItems: 'center',
        // borderWidth:1
    },
    logo: {
        width: '60%',
        height: '50%',
        // borderWidth:1
    },
    welcomHeading: {
        margin: 10,
        paddingLeft: 5
    },
    headingText: {
        fontSize: 22,
        fontWeight: '900',
        color: Color.black
    },
    buttonView: {
        alignItems: 'center',
        // borderWidth: 1,
        borderRadius: 15,
        width: '80%',
        backgroundColor: Color.primaryColor
    },
    button: {
        fontSize: 16,
        padding: 12,
        color: Color.white,
    }
})
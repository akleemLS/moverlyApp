import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import createStyles from '../../constant/CustomStyle';
import CustomHeader from '../../components/CustomHeader';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';

const EditProduct = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const Styles = createStyles(isDarkMode);


    const handleEditProduct = () => {
        console.log("button click ")
    }
    return (
        <View style={Styles.container}>
            <CustomHeader showSearch={false} title='Edit Product' />
            <ScrollView>


                <View style={styles.allIputsView}>
                    <Input title={'Titile Product'} />
                    <Input placeholder={'Titile Product ED'} />

                    <View style={styles.twoInputView}>
                        <View style={styles.inputBox}>
                            <Input title={'Unit Type'} />
                        </View>
                        <View style={styles.inputBox}>
                            <Input title={'Type Value'} />
                        </View>
                    </View>

                    <View style={styles.twoInputView}>
                        <View style={styles.inputBox}>
                            <Input title={'Product Assembly'} />
                        </View>
                        <View style={styles.inputBox}>
                            <Input title={'Product Disassembly'} />
                        </View>
                    </View>

                    <View style={styles.twoInputView}>
                        <View style={styles.inputBox}>
                            <Input title={'Product Packing'} />
                        </View>
                        <View style={styles.inputBox}>
                            <Input title={'Product Unpacking'} />
                        </View>
                    </View>

                    <View style={styles.twoInputView}>
                        <View style={styles.inputBox}>
                            <Input title={'Category'} />
                        </View>
                        <View style={styles.inputBox}>
                            <Input title={'Status'} />
                        </View>
                    </View>
                    <View style={[Styles.button, { paddingTop: 20, height: '100%', width: '100%' }]}>
                        <CustomButton title="Save" onPress={handleEditProduct} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default EditProduct

const styles = StyleSheet.create({
    allIputsView: {
        margin: 10
    },
    twoInputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        width: '100%'
    },
    inputBox: {
        width: '45%',
        // borderWidth: 1
    }
})
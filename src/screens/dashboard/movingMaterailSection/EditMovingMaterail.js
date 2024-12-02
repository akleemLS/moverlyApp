import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../../components/CustomHeader'
import createStyles from '../../../constant/CustomStyle';
import CustomDropdown from '../../../components/CustomDropdown';
import Input from '../../../components/Input';
import { dropdownData, numberDropDown } from '../../../constant/ConstantData';
import CustomButton from '../../../components/CustomButton';

const EditMovingMaterial = ({}) => {
    const isDarkMode = useColorScheme() === 'dark';
    const Styles = createStyles(isDarkMode);

    const handleEditProduct = () => {
        console.log("button click ")
    }
    const handleDropdown = (item) => {
        console.log('selected value', item)
    }
  return (
    <View style={[Styles.container]}>
            <CustomHeader showSearch={false} title='Edit Moving Materails' />
            <ScrollView>


                <View style={styles.allIputsView}>
                    <Input placeholder={'Enter Title Here!'} title={'Titile Service'} />
                    <Input placeholder={'Enter title DE'} title={'Titile DE'} />
                    <Input placeholder={'Enter Description Here!'} title={'Description'} />
                   

                    <View style={styles.twoInputView}>
                        <View style={styles.inputBox}>
                            <CustomDropdown title={'Length'} data={numberDropDown} onSelect={handleDropdown} />
                        </View>
                        <View style={styles.inputBox}>
                            <CustomDropdown title={'Breath'} data={dropdownData} onSelect={handleDropdown} />
                        </View>
                    </View>

                    <View style={styles.twoInputView}>
                        <View style={styles.inputBox}>
                            <CustomDropdown title={'Height'} data={numberDropDown} onSelect={handleDropdown} />
                        </View>
                        <View style={styles.inputBox}>
                            <CustomDropdown title={'Cubic Meter'} data={dropdownData} onSelect={handleDropdown} />
                        </View>
                    </View>

                    <View style={styles.twoInputView}>
                        <View style={styles.inputBox}>
                            <CustomDropdown title={'Price'} data={numberDropDown} onSelect={handleDropdown} />
                        </View>
                        <View style={styles.inputBox}>
                            <CustomDropdown title={'Category'} data={dropdownData} onSelect={handleDropdown} />
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

export default EditMovingMaterial

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
        width: '50%',
        // borderWidth: 1
    }
})
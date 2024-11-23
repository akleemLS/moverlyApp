import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import createStyles from '../../constant/CustomStyle';
import CustomHeader from '../../components/CustomHeader';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import CustomDropdown from '../../components/CustomDropdown';

const EditProduct = (props) => {

    console.log('props',props)
    const isDarkMode = useColorScheme() === 'dark';
    const Styles = createStyles(isDarkMode);
    const [inputValue, setInputValue] = useState({
        titileName: "",

    })
    const [numberDropDown, setNumberDropDown] = useState(
        Array.from({ length: 40 }, (_, i) => i * 10)
    )
    const [dropData, setDropData] = useState([
        "Living Room ",
        "Guest Room",
        "Store Room",
        "Personal Room",
        "Driving Room",
        "Bed Rood",
        "Hotel Room",
        "Reception Room",
        "Class Room",
        "Meeting Room"
    ])


    const handleEditProduct = () => {
        console.log("button click ")
    }
    const handleDropdown = (item) => {
        console.log('selected value', item)
    }
    return (
        <View style={[Styles.container]}>
            <CustomHeader showSearch={false} title='Edit Product' />
            <ScrollView>


                <View style={styles.allIputsView}>
                    <Input placeholder={'Product name!'} title={'Titile Product'} />
                    <Input placeholder={'Titile Product ED'} />
                    <CustomDropdown data={dropData} onSelect={handleDropdown} title={'dropdow'} />

                    <View style={styles.twoInputView}>
                        <View style={styles.inputBox}>
                            <CustomDropdown title={'Unit Type'} data={dropData} onSelect={handleDropdown} />
                        </View>
                        <View style={styles.inputBox}>
                            <CustomDropdown title={'Type Value'} data={numberDropDown} onSelect={handleDropdown} />
                        </View>
                    </View>

                    <View style={styles.twoInputView}>
                        <View style={styles.inputBox}>
                            {/* <Input title={'Product Assembly'} /> */}
                            <CustomDropdown title={'Product Assembly'} data={numberDropDown} onSelect={handleDropdown} />
                        </View>
                        <View style={styles.inputBox}>
                            {/* <Input title={'Product Disassembly'} /> */}
                            <CustomDropdown title={'Product Disassembly'} data={numberDropDown} onSelect={handleDropdown} />
                        </View>
                    </View>

                    <View style={styles.twoInputView}>
                        <View style={styles.inputBox}>
                            <CustomDropdown title={'Product Packing'} data={numberDropDown} onSelect={handleDropdown} />
                        </View>
                        <View style={styles.inputBox}>
                            {/* <Input title={'Product Unpacking'} /> */}
                            <CustomDropdown title={'Product Unpacking'} data={numberDropDown} onSelect={handleDropdown} />
                            
                        </View>
                    </View>

                    <View style={styles.twoInputView}>
                        <View style={styles.inputBox}>
                            <CustomDropdown title={'Category'} data={dropData} onSelect={handleDropdown} />
                        </View>
                        <View style={styles.inputBox}>
                            <CustomDropdown title={'Status'} data={["Active","Pending","Completed"]} onSelect={handleDropdown} />
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
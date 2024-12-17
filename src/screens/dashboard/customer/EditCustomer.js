import { ScrollView, StyleSheet, useColorScheme, View } from 'react-native'
import React from 'react'
import createStyles from '../../../constant/CustomStyle';
import CustomHeader from '../../../components/CustomHeader';
import Input from '../../../components/Input';
import CustomButton from '../../../components/CustomButton';
import { t } from 'i18next';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';

const EditCustomer = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const Styles = createStyles(isDarkMode);

    const handleEditProduct = () => {
        console.log("button click ")
    }
    const handleDropdown = (item) => {
        console.log('selected value', item)
    }

    return (
        <CustomSafeAreaView>
            <View style={[Styles.container]}>
                <CustomHeader showSearch={false} title='Edit Customer' />
                <ScrollView>
                    <View style={styles.allIputsView}>
                        <Input placeholder={t('Enter Name Here!')} title={'Name'} />

                        {/* <Input placeholder={'Company!'} title={''} /> */}
                        <Input placeholder={'Enter Email Here!'} title={'Email'} />

                        <Input placeholder={'Enter Contact Number Here!'} title={'Contact Number'} />

                        <View style={[Styles.button, { paddingTop: 20, height: '100%', width: '100%' }]}>
                            <CustomButton title={t("Save")} onPress={handleEditProduct} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </CustomSafeAreaView>

    )
}

export default EditCustomer

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
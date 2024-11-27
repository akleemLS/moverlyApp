import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import createStyles from '../../../constant/CustomStyle';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../components/CustomHeader';
import CustomeFlatList from '../../../components/CustomeFlatList';
import { movingData } from '../../../constant/ConstantData';
import MovingBoxItem from '../../../components/MovingBoxItem';

const Customer = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const Styles = createStyles(isDarkMode);
    const navigation = useNavigation();
    const [customerData, setCustomerData] = useState([]);

    useEffect(()=>{
        let newArr = movingData.map((item)=>({
            id:item.id,
            name:item.name,
            email:"testing@yopmail.com",
            location:`Silbersteinstraße${100 * (customerData.length  + 1)}`
        }));
        let moreData = Array.from({length:10},(_,i)=>({
            id:movingData.length+1,
            name: `Prüfservice${customerData.length + i + 1}`,
            email: `testing${customerData.length + i + 1}@yopmail.com`,
            location: `Silbersteinstraße 69,${100 * (customerData.length + i + 1)} Berlin`, 
        }))
        let final = [...newArr,...moreData]
        
        setCustomerData(final)
    },[])
    const hanldeCustomerClick =(item)=>{
        navigation.navigate('EditCustomer',{data:item})
    }
    return (
        <View style={Styles.container}>
            <CustomHeader placeholder='Search Customer data!' />
                <CustomeFlatList
                    data={customerData}
                    renderItem={({item})=><MovingBoxItem item={item} onPress={(item)=>hanldeCustomerClick(item)} type={'customer'} />}
                />
        </View>
    )
}

export default Customer

const styles = StyleSheet.create({})
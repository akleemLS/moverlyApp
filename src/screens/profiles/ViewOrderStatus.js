import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import createStyles from '../../constant/CustomStyle';
import CustomHeader from '../../components/CustomHeader';
import CustomeFlatList from '../../components/CustomeFlatList';
import LeadBoxItem from '../../components/LeadBoxItem';
import { OrderData } from '../../constant/ConstantData';



const ViewOrderStatus = ({route}) => {
    const isDarkMode = useColorScheme() === 'dark';
    const Styles = createStyles(isDarkMode);
    const [orderStatusData,setOrderStatus] = useState(OrderData)

    const hanldeOrderClick =(item)=>{
      console.log('order click ',item)
    }
  return (
    <View style={Styles.container}>
    <CustomHeader
    //   value={searchQuery}
    //   onChangeText={handleSearch}
      placeholder={`Search ${route?.params?.type} Here`}
    />

    <CustomeFlatList
        data={orderStatusData}
        renderItem={({item})=><LeadBoxItem item={item} onPress={(item)=>hanldeOrderClick(item)} />}
    />
     
    </View>
  )
}

export default ViewOrderStatus

const styles = StyleSheet.create({})
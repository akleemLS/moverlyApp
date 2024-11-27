import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import createStyles from '../constant/CustomStyle';
import CustomHeader from './CustomHeader';
import CustomeFlatList from './CustomeFlatList';
import LeadBoxItem from './LeadBoxItem';

const ViewOrder = ({data,onPress,title}) => {
    const isDarkMode = useColorScheme() === 'dark';
    const Styles = createStyles(isDarkMode);
  return (
    <View style={Styles.container}>

    <CustomHeader
    //   value={searchQuery}
    //   onChangeText={handleSearch}
      placeholder="Search Leads Here!"
    />

    <CustomeFlatList 
        data={data}
        renderItem={({item})=><LeadBoxItem item={item} onPress={onPress} />}
    />
     
    </View>
  )
}

export default ViewOrder

const styles = StyleSheet.create({})
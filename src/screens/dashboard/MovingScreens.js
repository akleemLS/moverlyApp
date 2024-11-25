import { FlatList, Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import createStyles from '../../constant/CustomStyle';
import CustomHeader from '../../components/CustomHeader';
import CustomeText from '../../components/CustomeText';
import Color from '../../constant/Color';
import { ProductData, CustomImageUrl, movingData } from '../../constant/ConstantData';
import MovingBoxItem from '../../components/MovingBoxItem';

const MovingScreens = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);

  const [data, setData] = useState(movingData)

  const handleClick = (item) => {
    console.log('navigate to edit form', item)
  }

  // useEffect(()=>{
  //  const newArr= Array.from({length:10},(_,i)=>{
  //     id=`${data?.length+1}`
  //     name=`Prüfservice${data.length+1}`,
  //     description=`Dachboden Entladung${data.length+2}`,
  //     price=`100${data.length+1}`
  //   })
  //   let final = [...data,...newArr]
  //   setData(final)
  // })
  return (
    <View style={Styles.container}>
      <CustomHeader placeholder='Search Moving here!' />
      <FlatList
        data={movingData}
        renderItem={({ item }) => <MovingBoxItem item={item} onPress={(item) => handleClick(item)} />}
      />
    </View>
  )
}

export default MovingScreens

const styles = StyleSheet.create({
  text: {
    // fontSize:18
    color: Color.textColor,
    paddingTop: 5
  }
})
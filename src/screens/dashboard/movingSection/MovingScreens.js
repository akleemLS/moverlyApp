import { FlatList, Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import createStyles from '../../../constant/CustomStyle';
import CustomHeader from '../../../components/CustomHeader';
import CustomeText from '../../../components/CustomeText';
import Color from '../../../constant/Color';
import { ProductData, CustomImageUrl, movingData } from '../../../constant/ConstantData';
import MovingBoxItem from '../../../components/MovingBoxItem';
import { useNavigation } from '@react-navigation/native';

const MovingScreens = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);
 const navigation = useNavigation();
  const [data, setData] = useState(movingData)
  useEffect(() => {
    const newArr = Array.from({ length: 10 }, (_, i) => ({
      id: data.length + i + 1, 
      name: `Prüfservice${data.length + i + 1}`,
      description: `Dachboden Entladung${data.length + i + 1}`,
      price: `${100 * (data.length + i + 1)}`, 
      image:'https://upload.wikimedia.org/wikipedia/commons/e/e0/Tools_clipart.png'
    }));
    const final = [...data, ...newArr];
    setData(final);
  }, []); 

  const handleClick = (item) => {
    console.log('navigate to edit form', item)
      navigation.navigate('EditMovingService',{data:item});
  }

  

  


  return (
    <View style={Styles.container}>
      <CustomHeader placeholder='Search Moving here!' />
      <FlatList
        data={data}
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
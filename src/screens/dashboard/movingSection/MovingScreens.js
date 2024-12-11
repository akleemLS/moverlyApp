import { FlatList, Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import createStyles from '../../../constant/CustomStyle';
import CustomHeader from '../../../components/CustomHeader';
import CustomeText from '../../../components/CustomeText';
import Color from '../../../constant/Color';
import { ProductData, CustomImageUrl, movingData } from '../../../constant/ConstantData';
import MovingBoxItem from '../../../components/MovingBoxItem';
import { useNavigation } from '@react-navigation/native';
import CustomSafeAreaView from '../../../components/CustomSafeAreaView';

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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzgcksO1olq1-hybqYi_W5nZx1EPs-bMxjxpumI2h8jntXkXQzm0BwvxhpWZ4GaFLW0E&usqp=CAU'
    }));
    const final = [...data, ...newArr];
    setData(final);
  }, []);

  const handleClick = (item) => {
    console.log('navigate to edit form', item)
    navigation.navigate('EditMovingService', { data: item });
  }






  return (
    <CustomSafeAreaView>
      <View style={Styles.container}>
        <CustomHeader placeholder='Search Moving here!' />
        <FlatList
          data={data}
          renderItem={({ item }) => <MovingBoxItem item={item} onPress={(item) => handleClick(item)} />}
        />
      </View>
    </CustomSafeAreaView>

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
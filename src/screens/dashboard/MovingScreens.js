import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import createStyles from '../../constant/CustomStyle';
import CustomHeader from '../../components/CustomHeader';
import CustomeText from '../../components/CustomeText';
import Color from '../../constant/Color';
import { ProductData ,CustomImageUrl} from '../../constant/ConstantData';

const MovingScreens = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);

  const [data, setData] = useState(ProductData)

  return (
    <View style={Styles.container}>
      <CustomHeader placeholder='Search Moving here!' />
      <View style={Styles.boxContainer}>

        <View style={Styles.imageContainer}>
          <Image
            source={{ uri: CustomImageUrl.toolImage }}
            style={[Styles.image,]}
            resizeMode="cover"

          />
        </View>

        <View style={[Styles.detailsContainer,]}>
          <CustomeText style={{fontSize:18,}} numberOfLines={3} title='Prüfservice' />
          <CustomeText style={styles.text} numberOfLines={3} title='Dachboden Entladung' />
        </View>

        <View style={[Styles.priceContainer,]}>
          <CustomeText title='100 €' />
        </View>

      </View>
    </View>
  )
}

export default MovingScreens

const styles = StyleSheet.create({
  text:{
    // fontSize:18
      color:Color.textColor,
      paddingTop:5
  }
})
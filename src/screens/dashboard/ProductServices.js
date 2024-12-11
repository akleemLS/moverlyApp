import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, useColorScheme, Dimensions, FlatList } from 'react-native';
import createStyles from '../../constant/CustomStyle';
import CustomHeader from '../../components/CustomHeader';
import CustomeText from '../../components/CustomeText';
import ProductBoxItem from '../../components/ProductBoxItem';
import { useNavigation } from '@react-navigation/native';
import { ProductData } from '../../constant/ConstantData';
import { t } from 'i18next';
import CustomeFlatList from '../../components/CustomeFlatList';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';


const ProductServices = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const Styles = createStyles(isDarkMode);

  const containerBackgroundColor = isDarkMode ? '#333' : '#fff';
  const [productData, setProductData] = useState(ProductData)

  const Width = Dimensions.get('screen').width;

  const hanldleProductClick = (item) => {
    console.log('click product===>> ', item);

    navigation.navigate('EditProduct', { data: item })
  }


  return (
    <CustomSafeAreaView>
      <View style={[Styles.container, Styles.backgroundColor]}>
        <CustomHeader placeholder={t('placeholder.Product')} />
        <CustomeFlatList
          data={productData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductBoxItem item={item} onPress={() => hanldleProductClick(item)} />}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </CustomSafeAreaView>

  );
};

export default ProductServices;

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 16,
  },

});



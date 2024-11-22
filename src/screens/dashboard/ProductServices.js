import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, useColorScheme, Dimensions, FlatList } from 'react-native';
import createStyles from '../../constant/CustomStyle';
import CustomHeader from '../../components/CustomHeader';
import CustomeText from '../../components/CustomeText';
import ProductBoxItem from '../../components/ProductBoxItem';

const ProductServices = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);
  const containerBackgroundColor = isDarkMode ? '#333' : '#fff';
  const [productData,setProductData] = useState([
    {
    id:1,
    name:'Chair',
    size:'0.40 m3',
    image:'https://thumbs.dreamstime.com/b/wooden-chair-isolated-11718982.jpg',
    prices:[{name: "Montage",amount:'800€'},{name:'Demontage',amount:'6€'},{name:'Verpacken',amount:'10€'},{name:"Aupicken",amount:'80€'},]
  },
  {
    id:2,
    name:'Table',
    size:'Sq fit:10',
    image:'https://t3.ftcdn.net/jpg/03/24/55/76/360_F_324557686_yIP0EDvln2zZbglmcakqmTxzdTE5t57h.jpg',
    prices:[{name: "Total",amount:'10€'},{name:'Average',amount:'5€'},{name:'Verpacken',amount:'9€'},{name:"Aupicken",amount:'12€'},]
  },
  {
    id:3,
    name:'Sofa',
    size:'Sq fit:30',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb1n7sWvRxjU8KZZWSMhS_SEjGiW6L5EmzVg&s',
    prices:[{name: "Total",amount:'10€'},{name:'Average',amount:'5€'},{name:'Verpacken',amount:'9€'},{name:"Aupicken",amount:'12€'},]
  },
  {
    id:4,
    name:'table',
    size:'Sq fit:10',
    image:'https://thumbs.dreamstime.com/b/wooden-chair-isolated-11718982.jpg',
    prices:[{name: "Montage",amount:'8€'},{name:'Demontage',amount:'6€'},{name:'Verpacken',amount:'10€'},{name:"Aupicken",amount:'80€'},]
  },
  {
    id:5,
    name:'Sofa',
    size:'0.40 m3',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb1n7sWvRxjU8KZZWSMhS_SEjGiW6L5EmzVg&s',
    prices:[{name: "Price",amount:'8€'},{name:'Tax',amount:'6€'},{name:'Vat',amount:'10€'},{name:"Aupicken",amount:'80€'},]
  },
  {
    id:6,
    name:'table',
    size:'Sq fit:10',
    image:'https://thumbs.dreamstime.com/b/wooden-chair-isolated-11718982.jpg',
    prices:[{name: "Total",amount:'10€'},{name:'Average',amount:'5€'},{name:'Verpacken',amount:'9€'},{name:"Aupicken",amount:'12€'},]
  },
  {
    id:7,
    name:'Sofa',
    size:'Sq fit:30',
    image:'https://thumbs.dreamstime.com/b/wooden-chair-isolated-11718982.jpg',
    prices:[{name: "Montage",amount:'8€'},{name:'Demontage',amount:'6€'},{name:'Verpacken',amount:'10€'},{name:"Aupicken",amount:'80€'},]
  },
])

  const Width = Dimensions.get('screen').width;


 
   
  return (
    <View style={[Styles.container, { backgroundColor: containerBackgroundColor }]}>
      <CustomHeader placeholder="Search Product Here!" />

     
      {/* <View style={[styles.boxContainer, Styles.backgroundColor]}>
        <View style={[styles.imageContainer, Styles.backgroundColor]}>
          <Image
            source={{ uri: 'https://thumbs.dreamstime.com/b/wooden-chair-isolated-11718982.jpg' }}
            style={[styles.image, Styles.backgroundColor]}
            resizeMode='cover'
          />
        </View>

        <View style={styles.detailsContainer}>
          <CustomeText numberOfLines={2} title='Product name ' style={[styles.detailsText,]} />
          <CustomeText numberOfLines={1} title='Size sq fit' style={[styles.detailsText,]} />
        </View>

        <View style={styles.priceContainer}>
          {["Montage", "Demontage", "Verpacken", "Aupijfoiejfeoacken"].map((item, index) => (
            <View style={[styles.priceRow]} key={index}>
              <View style={{width:Width/4.5}}>
                <CustomeText title={item} numberOfLines={1} style={[styles.priceText,]} />
              </View>
              <CustomeText title={'0€'} style={[styles.priceText,]} />
            </View>
          ))}
        </View>
      </View>  */}

      {/* <FlatList
        data={productData}
        renderItem={}
      /> */}
      <FlatList
        data={productData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductBoxItem item={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default ProductServices;

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 16,
  },
  
});



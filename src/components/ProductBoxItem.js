import React from 'react';
import { StyleSheet, View, Image, Dimensions, useColorScheme, TouchableOpacity } from 'react-native';
import CustomeText from './CustomeText';
import createStyles from '../constant/CustomStyle';


const ProductBoxItem = ({ item ,onPress}) => {
  const Width = Dimensions.get('screen').width;
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={.5}
      style={[styles.boxContainer, Styles.backgroundColor]}
    >
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Product Details Section */}
      <View style={styles.detailsContainer}>
        <CustomeText numberOfLines={2} title={item?.name} style={styles.detailsText} />
        <CustomeText numberOfLines={1} title={`${item.size}`} style={styles.detailsText} />
      </View>

      {/* Price Section */}
      <View style={styles.priceContainer}>
        {item?.prices?.map((priceLabel, index) => (
          <View style={styles.priceRow} key={index}>
            <View style={{ width: Width / 4.5 }}>
              <CustomeText title={priceLabel?.name} numberOfLines={1} style={styles.priceText} />
            </View>
            <View style={{ width: Width / 9.5, }}>
              <CustomeText numberOfLines={1} title={priceLabel?.amount} style={styles.priceText} />
            </View>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default ProductBoxItem;

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Dimensions.get('window').height * 0.13,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  detailsContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  detailsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    padding: 5,
  },
  priceContainer: {
    flex: 3.3,
    justifyContent: 'space-around',
    paddingLeft: 5,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: 16,
  },
});



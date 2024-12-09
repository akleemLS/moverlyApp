import React from 'react';
import { StyleSheet, View, Image, Dimensions, useColorScheme, TouchableOpacity } from 'react-native';
import CustomeText from './CustomeText';
import createStyles from '../constant/CustomStyle';


const ProductBoxItem = ({ item, onPress }) => {
  const Width = Dimensions.get('screen').width;
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={.5}
      style={[styles.boxContainer, Styles.boxBackgroundStyle]}
    >
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={[styles.image, { backgroundColor: 'transparent' }]}
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

            {/* Price Label */}
            <View style={{ width: Width / 3.8, }}>
              <CustomeText title={priceLabel?.name} numberOfLines={1} style={styles.priceText} />
            </View>

            {/* Price Value and Symbol */}
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: Width / 10, }}>
              <CustomeText
                numberOfLines={1}
                title={priceLabel?.amount}
                style={[styles.priceText, { textAlign: 'right' }]}
              />
              <CustomeText
                numberOfLines={1}
                title={'€'}
                style={[styles.priceText, { marginLeft: 4 }]}
              />
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
    shadowOpacity: 0.1,
    shadowRadius: .5,
    elevation: 1,
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
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
    flex: 6, // Increased flex to allow more space
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '500',
  },
});



import React from 'react';
import { View, Image, StyleSheet, useWindowDimensions, useColorScheme } from 'react-native';
import CustomeText from './CustomeText';
import Color from '../constant/Color';


const ServiceBoxItem = ({ name, image }) => {
  const { width } = useWindowDimensions();
  const isDarkMode = useColorScheme() === 'dark';
  const boxWidth = width / 3.5; // Adjust size dynamically

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Color.darkBackground : Color.lightBackground, width: boxWidth }]}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
      <CustomeText
        numberOfLines={1}
        title={name}
        style={[styles.text, { color: isDarkMode ? Color.darkText : Color.lightText }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: Color.shadow,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    padding: 5,
  },
  imageContainer: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default ServiceBoxItem;

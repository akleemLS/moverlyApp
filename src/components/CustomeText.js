import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const CustomeText = ({title,style,numberOfLines}) => {
    const isDarkMode = useColorScheme() === 'dark';
  return (
    <Text
    numberOfLines={numberOfLines}
    style={[
      styles.sectionTitle,
      {
        color: isDarkMode ? Colors.white : Colors.black,
      },
      style
    ]}>
    {title}
  </Text>
  )
}

export default CustomeText

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
      },
})
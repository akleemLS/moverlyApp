import React from 'react';
import { StyleSheet, Text, useColorScheme } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { t } from 'i18next';

const CustomeText = ({ title, style, numberOfLines, allowFontScaling = true }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text
      numberOfLines={numberOfLines}
      allowFontScaling={allowFontScaling}
      ellipsizeMode="tail" 
      style={[
        styles.defaultStyle,
        {
          color: isDarkMode ? Colors.white : Colors.black,
        },
        style,
      ]}
    >
      {t(title)}
    </Text>
  );
};





export default CustomeText;

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: 16,
    fontWeight: '400',
  },
});

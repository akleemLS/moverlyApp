import React from 'react';
import { Dimensions, StyleSheet, useColorScheme, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import createStyles from '../constant/CustomStyle';

const { width, height } = Dimensions.get('screen');

const Input = ({
  title = 'Input',
  value,
  onChangeText,
  placeholder,
  placeholderTextColor = '#888',
  mode = 'outlined',
  borderRadius = 10, 
  style,
  ...props
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);

  return (
    <View style={[styles.container, style]}>
      <TextInput
        label={title}
        value={value}
        // contentStyle={{fontFamily:30}}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        mode={mode}
        style={[Styles.boxBackgroundStyle, Styles.color,{
          overflow: 'hidden', 
          // fontSize: height * 0.019,
        }]}
        theme={{
          colors: {
            primary: isDarkMode ? '#bb86fc' : '#007bff', // Border color on focus
            text: isDarkMode ? '#fff' : '#000', // Text color
            placeholder: isDarkMode ? '#aaa' : '#fff', // Placeholder text color
            background: isDarkMode ? '#121212' : '#f9f9f9', // Background color
          },
          roundness: borderRadius,
        }}
        outlineStyle={{
          borderWidth: 0.3, // Set your desired border width
          borderColor: !isDarkMode ? '#444' : '#ffffff', // Border color
        }}
       
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginVertical: 10,
    alignSelf:'center'
  },
});

import React from 'react';
import { Dimensions, StyleSheet, useColorScheme, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import createStyles from '../constant/CustomStyle';

const { width } = Dimensions.get('screen');

const Input = React.forwardRef(
  (
    {
      title = 'Input',
      value,
      onChangeText,
      placeholder,
      height = 40, // Default height
      placeholderTextColor = '#888',
      mode = 'outlined', // Can be 'outlined' or 'flat'
      borderRadius = 10,
      dense = false, // Compact input
      error = false, // Error state
      multiline = false, // Multi-line input
      disabled = false, // Disables input
      editable = true, // Toggles editability
      contentStyle = {},
      style = {},
      themeOverrides,
      ...props
    },
    ref
  ) => {
    const isDarkMode = useColorScheme() === 'dark';
    const Styles = createStyles(isDarkMode);

    return (
      <View style={[styles.container, style]}>
        <TextInput
          ref={ref} // Forward the ref for external control
          label={title}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          mode={mode}
          dense={dense}
          error={error}
          multiline={multiline}
          editable={editable}
          disabled={disabled}
          style={[
            styles.inputStyle,
            {
              height: height, // Dynamic height
              borderRadius: borderRadius, // Border radius applied to the entire field
            },
            Styles.boxBackgroundStyle, // Theme-based background styles
            Styles.color, // Theme-based text color
            style, // Custom external style
          ]}
          contentStyle={[
            {
              fontSize: height * 0.4, // Font size relative to height
              paddingVertical: height * 0.15, // Vertical padding relative to height
            },
            contentStyle, // Custom content styling
          ]}
          theme={{
            ...themeOverrides,
            colors: {
              primary: isDarkMode ? '#bb86fc' : '#007bff', // Border color on focus
              text: isDarkMode ? '#fff' : '#000', // Text color
              placeholder: isDarkMode ? '#aaa' : placeholderTextColor, // Placeholder text color
              background: isDarkMode ? '#121212' : '#f9f9f9', // Background color
            },
            roundness: borderRadius, // Define roundness here
          }}
          outlineStyle={{
            borderWidth: .8, // Ensure border width is maintained
            borderColor: isDarkMode ? '#bb86fc' : '#4444', // Border color
          }}
          {...props}
        />
      </View>
    );
  }
);

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginVertical: 10,
    alignSelf: 'center',
  },
  inputStyle: {
    // borderWidth: 1, // Maintain the border width
    backgroundColor: 'transparent', // Ensure the background is visible
  },
});

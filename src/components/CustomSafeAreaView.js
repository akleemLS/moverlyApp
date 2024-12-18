import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, SafeAreaView } from 'react-native';

const CustomSafeAreaView = ({ children, backgroundColor, statusBarStyle }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const dynamicBackgroundColor = backgroundColor || (isDarkMode ? '#121212' : '#FFFFFF');
  const dynamicStatusBarStyle = statusBarStyle || (isDarkMode ? 'light-content' : 'dark-content');

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: dynamicBackgroundColor }]}>
      <StatusBar
        barStyle={dynamicStatusBarStyle}
        backgroundColor={dynamicBackgroundColor}
        animated={true} 
      />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default CustomSafeAreaView;

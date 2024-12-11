// src/components/CustomSafeAreaView.js
import React from 'react';

import { StatusBar, StyleSheet, useColorScheme ,SafeAreaView} from 'react-native';

const CustomSafeAreaView = ({ children, backgroundColor, statusBarStyle }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: backgroundColor || (isDarkMode ? '#121212' : '#FFFFFF') }]}>
      <StatusBar
        barStyle={statusBarStyle || (isDarkMode ? 'light-content' : 'dark-content')}
        backgroundColor={backgroundColor || (isDarkMode ? '#121212' : '#FFFFFF')}
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

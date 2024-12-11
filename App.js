import React from 'react';
import {  StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigation/Navigation';
import I18nProvider from './src/utils/I18nProvider';
import { SafeAreaView } from 'react-native-safe-area-context';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <I18nProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Navigation />
    </I18nProvider>
  );
};

export default App;

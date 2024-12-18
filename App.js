import React from 'react';
import { KeyboardAvoidingView, Platform, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigation/Navigation';
import I18nProvider from './src/utils/I18nProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <I18nProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined} // Use 'padding' for iOS and 'height' or undefined for Android
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}  // Adjust offset as per your layout needs
        >
          <Navigation />
        </KeyboardAvoidingView>
      </GestureHandlerRootView>
    </I18nProvider>
  );
};

export default App;

import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Button, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useTranslation } from 'react-i18next';
import CustomeText from './src/components/CustomeText';
import { changeLanguage, loadLanguage } from './src/utils/i18n';
import Navigation from './src/navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const { t } = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  // useEffect(()=>{
  //   SplashScreen?.hide()
  // },[])

  

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Navigation />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

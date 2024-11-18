import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Button, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useTranslation } from 'react-i18next';
import CustomeText from './src/components/CustomeText';
import { changeLanguage, loadLanguage } from './src/utils/i18n';
import Navigation from './src/navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import notificationService from './src/screens/configration/NotificationService';

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

  useEffect(() => {
    const initializeNotifications = async () => {
      const hasPermission = await notificationService.requestPermission();
      if (hasPermission) {
        notificationService.createNotificationChannels();
        const fcmToken = await notificationService.getFCMToken(); // Retrieve the token
        console.log('Token assigned to variable:', fcmToken); 
        notificationService.listenForNotifications();
      }
    };

    initializeNotifications();
  }, []);


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

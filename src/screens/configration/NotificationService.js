import messaging from '@react-native-firebase/messaging';
import { Platform, Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';

class NotificationService {

  constructor() {
    this.fcmToken = null; // Variable to store the token
  }
  // Request notification permission
  async requestPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      return true;
    } else {
      console.log('Notification permission denied');
      return false;
    }
  }

  // Get the FCM token
  async getFCMToken() {
    try {
      const token = await messaging().getToken();
      if (token) {
        this.fcmToken = token; // Assign the token to the variable
        console.log('FCM Token:', this.fcmToken); // Log the token to the console
        return this.fcmToken;
      }
    } catch (error) {
      console.error('Error getting FCM token:', error);
    }
  }



  // Listen for notifications
  listenForNotifications() {
    // Foreground notification handler
    messaging().onMessage(async (remoteMessage) => {
      console.log('Notification received in foreground:', remoteMessage);
      PushNotification.localNotification({
        channelId: 'default-channel-id',
        title: remoteMessage.notification.title,
        message: remoteMessage.notification.body,
      });
    });

    // Background/terminated notification handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Notification received in background:', remoteMessage);
    });

    // Notification opened when the app is in the background
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log('Notification caused app to open from background:', remoteMessage);
      Alert.alert(
        remoteMessage.notification.title,
        remoteMessage.notification.body
      );
    });

    // Notification opened when the app was terminated
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log('Notification caused app to open from quit state:', remoteMessage);
          Alert.alert(
            remoteMessage.notification.title,
            remoteMessage.notification.body
          );
        }
      });
  }

  // Create notification channels (Android)
  createNotificationChannels() {
    if (Platform.OS === 'android') {
      PushNotification.createChannel(
        {
          channelId: 'default-channel-id',
          channelName: 'Default Channel',
          channelDescription: 'A default notification channel',
          importance: 4, // High importance
          vibrate: true,
        },
        (created) => console.log(`Notification channel created: ${created}`)
      );
    }
  }
}

const notificationService = new NotificationService();
export default notificationService;

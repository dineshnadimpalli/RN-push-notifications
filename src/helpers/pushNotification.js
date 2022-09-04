// import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function requestUserPermission() {
  // const authStatus = await messaging().requestPermission();
  // const enabled =
  //   authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //   authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  // if (enabled) {
  //   console.log('Authorization status:', authStatus);
  //   GetFCMToken();
  // }
}

async function GetFCMToken() {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  if (!fcmToken) {
    try {
      // fcmToken = await messaging().getToken();
      // if (fcmToken) {
      //   await AsyncStorage.setItem('fcmToken', fcmToken);
      // }
    } catch (err) {
      console.log('******** Start of Error in FCM token fetching **********');
      console.log(err);
      console.log('******** End of Error in FCM token fetching **********');
    }
  }
  console.log('******************* FCM token ***********************');
  console.log(fcmToken);
  console.log('******************* FCM token ***********************');
}

const NotificationListener = () => {
  // messaging().onNotificationOpenedApp(remoteMsg => {
  //   console.log(
  //     '******* Notification caused app to open from background state *********'
  //   );
  //   console.log(remoteMsg.notification);
  // });
  // // check whether an initial notification is available
  // messaging()
  //   .getInitialNotification()
  //   .then(remoteMsg => {
  //     console.log(
  //       '******* Notification caused app to open from quit state *********'
  //     );
  //     if (remoteMsg) {
  //       console.log(remoteMsg.notification);
  //     } else {
  //       console.log('No message found');
  //     }
  //   });
  // messaging().onMessage(remoteMsg => {
  //   console.log('******* Notification in foreground state *********');
  //   console.log(remoteMsg);
  // });
};

export {requestUserPermission, NotificationListener};

import PushNotification from 'react-native-push-notification';

const showNotificationAndroid = (title, msg) => {
  console.log('======title, msg=====', title, msg);
  PushNotification.localNotification({
    channelId: 'test-channel',
    title: title,
    message: msg,
  });
};

const handleScheduledNotificationAndroid = (title, msg) => {
  PushNotification.localNotificationSchedule({
    channelId: 'test-channel',
    title: title,
    message: msg,
    date: new Date(Date.now() + 5 * 1000),
    allowWhileIdle: true,
  });
};

const handleCancelAndroid = () => {
  PushNotification.cancelAllLocalNotifications();
};

export {
  showNotificationAndroid,
  handleScheduledNotificationAndroid,
  handleCancelAndroid,
};

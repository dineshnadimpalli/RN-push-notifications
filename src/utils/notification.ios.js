import PushNotificationIOS from '@react-native-community/push-notification-ios';

const showNotificationIOS = (title, msg) => {
  PushNotificationIOS.addNotificationRequest({
    id: 'random-channel',
    title: title,
    subtitle: msg,
  });
};

const handleScheduledNotificationIOS = (title, msg) => {
  const date = new Date();
  date.setSeconds(date.getSeconds() + 5);
  PushNotificationIOS.addNotificationRequest({
    id: 'random-channel',
    title: title,
    subtitle: msg,
    fireDate: date,
  });
};

const handleCancelIOS = () => {
  PushNotificationIOS.removeAllDeliveredNotifications();
  PushNotificationIOS.removeAllPendingNotificationRequests();
};

export {showNotificationIOS, handleScheduledNotificationIOS, handleCancelIOS};

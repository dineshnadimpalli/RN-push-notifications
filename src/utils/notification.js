import {Platform} from 'react-native';
import {
  handleCancelIOS,
  handleScheduledNotificationIOS,
  showNotificationIOS,
} from './notification.ios';
import {
  handleCancelAndroid,
  handleScheduledNotificationAndroid,
  showNotificationAndroid,
} from './notification.android';

const showNotification = (...args) => {
  Platform.OS === 'ios'
    ? showNotificationIOS(...args)
    : showNotificationAndroid(...args);
};

const handleScheduledNotification = (...args) => {
  Platform.OS === 'ios'
    ? handleScheduledNotificationIOS(...args)
    : handleScheduledNotificationAndroid(...args);
};

const handleCancel = (...args) => {
  Platform.OS === 'ios'
    ? handleCancelIOS(...args)
    : handleCancelAndroid(...args);
};

export {showNotification, handleScheduledNotification, handleCancel};

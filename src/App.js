/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  NotificationListener,
  requestUserPermission,
} from './helpers/pushNotification.js';
import {
  handleCancel,
  handleScheduledNotification,
  showNotification,
} from './utils/notification.js';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    requestUserPermission();
    NotificationListener();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}> */}
      <View style={styles.container}>
        <Text style={styles.headerText}>Push notifications</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => showNotification('hello', 'hey dinesh 🚀')}>
          <View style={styles.button}>
            <Text style={styles.buttonTitle}>
              {'Click me to get notifications'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => handleScheduledNotification('hello', 'hey dinesh 🚀')}>
          <View style={styles.button}>
            <Text style={styles.buttonTitle}>
              {'Click me to get 5s delayed notifications'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} onPress={() => handleCancel()}>
          <View style={styles.cancelBtn}>
            <Text style={styles.cancelBtnTxt}>
              {'Click me to cancel notifications'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    paddingBottom: 20,
  },
  button: {
    padding: 16,
    marginTop: 20,
    backgroundColor: 'green',
    borderRadius: 24,
  },
  cancelBtn: {
    marginTop: 40,
    padding: 16,
    borderRadius: 24,
  },
  cancelBtnTxt: {
    color: 'red',
  },
  buttonTitle: {
    color: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

import React, {memo} from 'react';
import {AppRegistry, View, Text, Platform, StyleSheet} from 'react-native';
import Firebase from 'firebase';
import {firebaseConfig} from './config/config';

let app = Firebase.initializeApp(firebaseConfig);

// All future sign-in request now include tenant ID.
Firebase.auth()
  .signInWithEmailAndPassword('ishaan.puniani@gmail.com', '123456')
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log(error);
  });

export const db = app.database();
const appName = 'experiment_rnw';
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export const Main = memo(() => {
  return (
    <View style={styles.container}>
      <Text>Experiment sucees for react native with web</Text>
    </View>
  );
});

AppRegistry.registerComponent(appName, () => Main);
if (Platform.OS === 'web') {
  /// since analytics so far is available for web only and not working on mobile like this
  // https://www.cardinalpath.com/blog/tracking-react-native-mobile-apps-using-google-analytics-for-firebase
  // app.analytics();
  // app.analytics().logEvent('first_open');
  // app.analytics().logEvent('App Started:' + Platform.OS);

  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  });
}

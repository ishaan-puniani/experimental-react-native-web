import React, {memo} from 'react';
import {
  AppRegistry,
  Button,
  View,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';

import {initialize, analytics} from './platformAdapter/firebase';
const appName = 'experiment_rnw';
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export const Main = memo(() => {
  return (
    <View style={styles.container}>
      <Text>Experiment sucees for react native with web</Text>
      <Button
        title="Add To Basket"
        onPress={() =>
          analytics().logEvent('basket', {
            id: 3745092,
            item: 'mens grey t-shirt',
            description: ['round neck', 'long sleeved'],
            size: 'L',
          })
        }
      />
    </View>
  );
});

AppRegistry.registerComponent(appName, () => Main);
if (Platform.OS === 'web') {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  });
}
initialize();

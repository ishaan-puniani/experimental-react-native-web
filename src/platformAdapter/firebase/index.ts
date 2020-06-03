import {Platform} from 'react-native';

let _firebase: any, _analytics: any;

export const initialize = async () => {
  if (Platform.OS === 'web') {
  } else {
    _firebase = await import('@react-native-firebase/app');
    _analytics = await import('@react-native-firebase/analytics');
  }
};

export const analytics = () => {
  if (!_analytics) {
    return {logEvent: () => {}};
  }
  return _analytics.default();
};

// config-overrides.js
const {addWebpackAlias, override} = require('customize-cra');

const path = require('path');

module.exports = override(
  addWebpackAlias({
    'react-native-modal': 'modal-enhanced-react-native-web',
  }),
);

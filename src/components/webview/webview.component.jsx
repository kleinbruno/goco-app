import React from 'react';
import {WebView as RNWebView} from 'react-native-webview';
import {styles} from './webview.styles';

const GOCO_URL = 'https://goco.io/';

export const WebView = () => {
  return (
    <RNWebView
      source={{uri: GOCO_URL}}
      style={styles.container}
      allowsBackForwardNavigationGestures={true}
      mediaPlaybackRequiresUserAction={true} // Solve the issue of video auto playng
    />
  );
};

import React from 'react';
import {WebView as RNWebView} from 'react-native-webview';
import {styles} from './webview.styles';

export const WebView = () => {
  return (
    <RNWebView
      source={{uri: 'https://www.goco.io'}} //usar enum
      style={styles.container}
      allowsBackForwardNavigationGestures={true}
      mediaPlaybackRequiresUserAction={true} // Solve the issue of video auto playng
    />
  );
};

import React from 'react';
import {StyleSheet} from 'react-native';
import {WebView as RNWebView} from 'react-native-webview';

export const WebView = () => {
  return (
    <RNWebView
      source={{uri: 'https://www.goco.io'}}
      style={styles.webview}
      allowsBackForwardNavigationGestures={true}
      mediaPlaybackRequiresUserAction={true} // Solve the issue of video auto playng
    />
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});

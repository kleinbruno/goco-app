import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

export const WebView2 = () => {
  return (
    <WebView
      source={{uri: 'https://www.goco.io'}}
      style={styles.webview}
      allowsInlineMediaPlayback={true}
    />
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});

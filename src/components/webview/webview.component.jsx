import React from 'react';
import {WebView as RNWebView} from 'react-native-webview';
import {styles} from './webview.styles';
import PropTypes from 'prop-types';

export const WebView = ({uri}) => {
  return (
    <RNWebView
      source={{uri}}
      style={styles.container}
      allowsBackForwardNavigationGestures={true}
      mediaPlaybackRequiresUserAction={true} // Solve the issue of video auto playng
    />
  );
};

WebView.propTypes = {
  uri: PropTypes.string.isRequired,
};

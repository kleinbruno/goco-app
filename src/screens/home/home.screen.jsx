import React from 'react';
import {View} from 'react-native';
import {WebView} from '../../components';
import {styles} from './home.styles';

export function HomeScreen() {
  const GOCO_URL = 'https://goco.io/';

  return (
    <View style={styles.container}>
      <WebView uri={GOCO_URL} />
    </View>
  );
}

import React from 'react';
import {View} from 'react-native';
import {WebView} from '../../components';
import {styles} from './home.styles';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <WebView />
    </View>
  );
}

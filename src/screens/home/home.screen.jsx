import React from 'react';
import {View} from 'react-native';
import {WebView} from '../../components';

export function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <WebView />
    </View>
  );
}

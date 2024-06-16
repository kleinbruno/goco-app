import React from 'react';
import {View, Alert} from 'react-native';
import {Button} from '../../components';
import {colorPalette} from '../../colors';

export function LoginScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        buttonColor={colorPalette.white}
        iconColor={colorPalette.lightPrimaryColor}
        iconName="log-out"
        onPress={() => Alert.alert('You clicked the button!')}
      />
    </View>
  );
}

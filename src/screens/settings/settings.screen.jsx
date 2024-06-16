import React from 'react';
import {Text, View, Switch} from 'react-native';
import {styles} from './settings.styles';
import {useState} from 'react';

export function SettingsScreen({navigation}) {
  const [state, setState] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.inputArea}>
        <Text style={styles.subtitle}>Theme: Dark</Text>
        <Switch onValueChange={() => setState(!state)} value={state} />
      </View>
    </View>
  );
}

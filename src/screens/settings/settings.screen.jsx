import React from 'react';
import {Text, View, Switch} from 'react-native';
import {styles} from './settings.styles';
import {useContext} from 'react';
import {ThemaContext} from '../../contexts';

export function SettingsScreen({navigation}) {
  const {thema, setThema} = useContext(ThemaContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.inputArea}>
        <Text style={styles.subtitle}>Theme: {thema} mode</Text>
        <Switch
          onValueChange={() =>
            thema === 'light' ? setThema('dark') : setThema('light')
          }
          value={thema === 'light' ? true : false}
        />
      </View>
    </View>
  );
}

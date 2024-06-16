import React from 'react';
import {Text, View, Switch} from 'react-native';
import {styles} from './settings.styles';
import {useContext} from 'react';
import {ThemeContext} from '../../contexts';

export function SettingsScreen({navigation}) {
  const {theme, setTheme, selectedTheme} = useContext(ThemeContext);

  const style = styles(selectedTheme);

  return (
    <View style={style.container}>
      <View style={style.inputArea}>
        <Text style={style.subtitle}>Theme: {theme} mode</Text>
        <Switch
          onValueChange={() =>
            theme === 'light' ? setTheme('dark') : setTheme('light')
          }
          value={theme === 'light' ? true : false}
        />
      </View>
    </View>
  );
}

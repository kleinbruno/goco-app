import React from 'react';
import {Text, View, Switch} from 'react-native';
import {styles} from './settings.styles';
import {useContext} from 'react';
import {ThemeContext} from '../../contexts';
import {settingsTexts} from '../../translations/en';
import {themeEnum} from '../../enums';

export function SettingsScreen() {
  const {theme, setTheme, selectedTheme} = useContext(ThemeContext);

  const style = styles(selectedTheme);

  return (
    <View style={style.container}>
      <View style={style.inputArea}>
        <Text
          style={
            style.subtitle
          }>{`${settingsTexts.theme} ${theme} ${settingsTexts.mode}`}</Text>
        <Switch
          onValueChange={() =>
            theme === themeEnum.LIGHT
              ? setTheme(themeEnum.DARK)
              : setTheme(themeEnum.LIGHT)
          }
          value={theme === themeEnum.LIGHT}
        />
      </View>
    </View>
  );
}

import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '../icon/icon.component';
import {styles} from './button.styles';

export const Button = ({iconName, onPress, buttonColor, iconColor}) => {
  return (
    <TouchableOpacity
      style={StyleSheet.compose(styles.button, {
        backgroundColor: buttonColor,
      })}
      onPress={onPress}>
      <Icon iconName={iconName} iconSize={24} color={iconColor} />
    </TouchableOpacity>
  );
};

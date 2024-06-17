import React, {Children} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '../icon/icon.component';
import {styles} from './button.styles';

export const Button = ({
  iconName,
  iconColor,
  onPress,
  buttonColor,
  style,
  children,
}) => {
  return (
    <TouchableOpacity
      style={StyleSheet.compose(styles.button, style, {
        backgroundColor: buttonColor,
      })}
      onPress={onPress}>
      {iconName ? (
        <Icon iconName={iconName} iconSize={24} color={iconColor} />
      ) : null}
      {children}
    </TouchableOpacity>
  );
};

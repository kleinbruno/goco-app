import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '../icon/icon.component';
import {styles} from './button.styles';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  buttonColor: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

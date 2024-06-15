import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';

export const Icon = ({iconName, iconSize, color, style}) => {
  return (
    <Ionicon name={iconName} size={iconSize} color={color} style={style} />
  );
};

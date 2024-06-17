import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

export const Icon = ({iconName, iconSize, color, style}) => {
  return (
    <Ionicon name={iconName} size={iconSize} color={color} style={style} />
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  style: PropTypes.object,
};

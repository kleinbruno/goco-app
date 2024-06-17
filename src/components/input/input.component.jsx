import React from 'react';
import {TextInput} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../../contexts';
import {styles} from './input.styles';
import PropTypes from 'prop-types';

export const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  onSubmitEditing,
}) => {
  const {selectedTheme} = useContext(ThemeContext);

  const style = styles(selectedTheme);

  return (
    <TextInput
      style={style.input}
      placeholder={placeholder}
      placeholderTextColor={selectedTheme.placeHolderText}
      autoCapitalize="none"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onSubmitEditing: PropTypes.func,
};

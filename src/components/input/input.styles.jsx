import {StyleSheet} from 'react-native';

export const styles = theme => {
  return StyleSheet.create({
    input: {
      height: 40,
      width: '90%',
      backgroundColor: theme.backgroundColor,
      marginBottom: 15,
      padding: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: theme.text,
      color: theme.text,
    },
  });
};

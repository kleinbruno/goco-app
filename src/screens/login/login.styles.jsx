import {StyleSheet} from 'react-native';

export const styles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: theme.primaryColor,
      marginBottom: 20,
    },
    inputArea: {
      height: 200,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
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
    button: {
      height: 40,
      width: 100,
      backgroundColor: theme.primaryColor,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: '400',
      color: theme.text,
    },
  });
};

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
    },
    inputArea: {
      height: 200,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
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
    upsideDownAndMirrored: {
      transform: [{rotate: '140deg'}, {scaleX: -1}],
      marginTop: 5,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
};

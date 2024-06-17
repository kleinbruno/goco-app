import {StyleSheet} from 'react-native';

export const styles = theme => {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      padding: 20,
      backgroundColor: theme.backgroundColor,
    },
    profilePicture: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 20,
      borderColor: theme.primaryColor,
      borderWidth: 2,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: theme.text,
    },
    bio: {
      fontSize: 16,
      fontStyle: 'italic',
      marginBottom: 20,
      textAlign: 'center',
      color: theme.placeHolderText,
    },
    infoContainer: {
      flexDirection: 'row',
      width: '100%',
      marginBottom: 10,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: theme.footerAndHeaderBackgroundColor,
    },
    label: {
      fontWeight: 'bold',
      width: 100,
      color: theme.text,
    },
    info: {
      flex: 1,
      color: theme.text,
    },
    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: 20,
    },
  });
};

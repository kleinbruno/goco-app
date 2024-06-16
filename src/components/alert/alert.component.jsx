import {Alert as RNAlert} from 'react-native';

export const Alert = ({onPress, titleText, message}) => {
  RNAlert.alert(
    titleText,
    message,
    [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: onPress},
    ],
    {cancelable: false},
  );
  return null;
};

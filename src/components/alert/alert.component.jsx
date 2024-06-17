import {Alert as RNAlert} from 'react-native';
import {commonTexts} from '../../translations/en';

export const Alert = ({onPress, titleText, message}) => {
  RNAlert.alert(
    titleText,
    message,
    [
      {
        text: commonTexts.cancel,
        onPress: () => {},
        style: 'cancel',
      },
      {text: commonTexts.ok, onPress: onPress},
    ],
    {cancelable: false},
  );
  return null;
};

import {Alert as RNAlert} from 'react-native';
import {commonTexts} from '../../translations/en';
import PropTypes from 'prop-types';

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

Alert.propTypes = {
  onPress: PropTypes.func.isRequired,
  titleText: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

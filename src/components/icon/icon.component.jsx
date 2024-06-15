import Ionicon from 'react-native-vector-icons/Ionicons';

export const Icon = ({iconName, iconSize, color}) => {
  return <Ionicon name={iconName} size={iconSize} color={color} />;
};

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Button} from '../../components';
import {useContext} from 'react';
import {AuthenticationContext, ThemeContext} from '../../contexts';
import {styles} from './profile.styles';

export const ProfileScreen = () => {
  const {user} = useContext(AuthenticationContext);
  const {selectedTheme} = useContext(ThemeContext);

  const style = styles(selectedTheme);

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Image source={{uri: user.profilePicture}} style={style.profilePicture} />
      <Text style={style.name}>{user.name}</Text>
      <Text style={style.bio}>{user.bio}</Text>
      <View style={style.infoContainer}>
        <Text style={style.label}>Email:</Text>
        <Text style={style.info}>{user.email}</Text>
      </View>
      <View style={style.infoContainer}>
        <Text style={style.label}>Address:</Text>
        <Text style={style.info}>{user.address}</Text>
      </View>
      <View style={style.infoContainer}>
        <Text style={style.label}>City:</Text>
        <Text style={style.info}>{user.city}</Text>
      </View>
      <View style={style.infoContainer}>
        <Text style={style.label}>State:</Text>
        <Text style={style.info}>{user.state}</Text>
      </View>
      <View style={style.infoContainer}>
        <Text style={style.label}>Country:</Text>
        <Text style={style.info}>{user.country}</Text>
      </View>
      <View style={style.infoContainer}>
        <Text style={style.label}>Phone:</Text>
        <Text style={style.info}>{user.phone}</Text>
      </View>
      <View style={style.socialContainer}>
        <Button
          onPress={() => Linking.openURL(user.socialMedia.linkedIn)}
          iconName="logo-linkedin"
          iconColor={selectedTheme.text}
          buttonColor={selectedTheme.backgroundColor}
        />
      </View>
    </ScrollView>
  );
};

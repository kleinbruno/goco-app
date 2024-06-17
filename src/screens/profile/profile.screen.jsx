import React from 'react';
import {View, Text, ScrollView, Image, Linking} from 'react-native';
import {Button} from '../../components';
import {useContext} from 'react';
import {AuthenticationContext, ThemeContext} from '../../contexts';
import {styles} from './profile.styles';
import {loginTexts, profileTexts} from '../../translations/en';

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
        <Text style={style.label}>{loginTexts.email}</Text>
        <Text style={style.info}>{user.email}</Text>
      </View>
      <View style={style.infoContainer}>
        <Text style={style.label}>{profileTexts.address}</Text>
        <Text style={style.info}>{user.address}</Text>
      </View>
      <View style={style.infoContainer}>
        <Text style={style.label}>{profileTexts.city}</Text>
        <Text style={style.info}>{user.city}</Text>
      </View>
      <View style={style.infoContainer}>
        <Text style={style.label}>{profileTexts.state}</Text>
        <Text style={style.info}>{user.state}</Text>
      </View>
      <View style={style.infoContainer}>
        <Text style={style.label}>{profileTexts.country}</Text>
        <Text style={style.info}>{user.country}</Text>
      </View>
      <View style={style.infoContainer}>
        <Text style={style.label}>{profileTexts.phone}</Text>
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

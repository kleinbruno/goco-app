import React from 'react';
import {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import {styles} from './login.styles';
import {useContext} from 'react';
import {ThemeContext, AuthenticationContext} from '../../contexts';
import {Icon} from '../../components';

export function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {selectedTheme} = useContext(ThemeContext);
  const {login, setIsSignedIn} = useContext(AuthenticationContext);

  const style = styles(selectedTheme);

  function loggingIntoTheSystem() {
    const result = login(email, password);
    if (result === 'Success') {
      setIsSignedIn(true);
    } else {
      Alert.alert(result);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.row}>
        <Text style={style.title}>Login GoCo</Text>
        <Icon
          iconName={'refresh'}
          iconSize={23}
          color={selectedTheme.primaryColor}
          style={style.upsideDownAndMirrored}
        />
      </View>

      <View style={style.inputArea}>
        <TextInput
          style={style.input}
          placeholder="Email"
          placeholderTextColor={selectedTheme.placeHolderText}
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={style.input}
          placeholder="Password"
          placeholderTextColor={selectedTheme.placeHolderText}
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        style={style.button}
        onPress={() => loggingIntoTheSystem()}>
        <Text style={style.buttonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

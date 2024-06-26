import React from 'react';
import {useState} from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import {styles} from './login.styles';
import {useContext} from 'react';
import {ThemeContext, AuthenticationContext} from '../../contexts';
import {Icon, Input, Button} from '../../components';
import {loginTexts, commonTexts} from '../../translations/en';

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {selectedTheme} = useContext(ThemeContext);
  const {login, setIsSignedIn} = useContext(AuthenticationContext);

  const style = styles(selectedTheme);

  function loggingIntoTheSystem() {
    const result = login(email, password);
    if (result === commonTexts.success) {
      setIsSignedIn(true);
    } else {
      Alert.alert(result);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.row}>
        <Text style={style.title}>{loginTexts.loginCogo}</Text>
        <Icon
          iconName={'refresh'}
          iconSize={23}
          color={selectedTheme.primaryColor}
          style={style.upsideDownAndMirrored}
        />
      </View>

      <View style={style.inputArea}>
        <Input
          placeholder={loginTexts.email}
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={loggingIntoTheSystem}
        />
        <Input
          placeholder={loginTexts.password}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          onSubmitEditing={loggingIntoTheSystem}
        />
      </View>

      <Button style={style.button} onPress={() => loggingIntoTheSystem()}>
        <Text style={style.buttonText}>{loginTexts.enter}</Text>
      </Button>
    </View>
  );
}

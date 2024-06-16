import React from 'react';
import {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import {styles} from './login.styles';
import {useContext} from 'react';
import {ThemeContext} from '../../contexts';

export function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {selectedTheme} = useContext(ThemeContext);

  const style = styles(selectedTheme);

  return (
    <View style={style.container}>
      <StatusBar />
      <Text style={style.title}>Login</Text>

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

      <TouchableOpacity style={style.button} onPress={() => {}}>
        <Text style={style.buttonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

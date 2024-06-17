import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginScreen} from '../screens';
import {useContext} from 'react';
import {AuthenticationContext} from '../contexts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppTabs} from './tabs/tabs';
import {loginTexts, commonTexts} from '../translations/en';

const Stack = createNativeStackNavigator();

export function Routes() {
  const {isSignedIn} = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen
            name={commonTexts.appTabs}
            component={AppTabs}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name={loginTexts.login}
            component={LoginScreen}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

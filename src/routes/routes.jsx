import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginScreen} from '../screens';
import {useContext} from 'react';
import {AuthenticationContext} from '../contexts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppTabs} from './tabs';

const Stack = createNativeStackNavigator();

export function Routes() {
  const {isSignedIn} = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen name="AppTabs" component={AppTabs} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

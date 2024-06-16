import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginScreen} from '../screens';
import {useContext} from 'react';
import {ThemeContext, AuthenticationContext} from '../contexts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppTabs} from './tabs/tabs';

const Stack = createNativeStackNavigator();

export function Routes() {
  const {isSignedIn} = useContext(AuthenticationContext);
  const {selectedTheme} = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen
            name="AppTabs"
            component={AppTabs}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

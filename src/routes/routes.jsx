import React from 'react';
import {Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ProfileScreen,
  SettingsScreen,
  LoginScreen,
} from '../screens';
import {Icon, Button} from '../components';
import {StyleSheet} from 'react-native';
import {useContext} from 'react';
import {ThemeContext, AuthenticationContext} from '../contexts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function getColor(focused, selectedTheme) {
  return focused ? selectedTheme.primaryColor : selectedTheme.inactiveColor;
}

// just a trick to use the refresh icon like a GoCo logo
const styles = StyleSheet.create({
  upsideDownAndMirrored: {
    transform: [{rotate: '140deg'}, {scaleX: -1}],
  },
});

const LogoutComponent = () => {
  return null;
};

function AppTabs() {
  const {selectedTheme} = useContext(ThemeContext);
  const {setIsSignedIn} = useContext(AuthenticationContext);

  const showAlert = () => {
    Alert.alert(
      'Confirm Action',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => setIsSignedIn(false)},
      ],
      {cancelable: false},
    );
  };

  return (
    <Tab.Navigator
      initialRouteName={'GoCo'}
      screenOptions={{
        tabBarActiveTintColor: selectedTheme.primaryColor,
        tabBarInactiveTintColor: selectedTheme.inactiveColor,
        tabBarStyle: {
          backgroundColor: selectedTheme.footerAndHeaderBackgroundColor,
        },
        headerStyle: {
          backgroundColor: selectedTheme.footerAndHeaderBackgroundColor,
        },
        headerTintColor: selectedTheme.text,
      }}>
      <Tab.Screen
        name={'GoCo'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              iconName={'refresh'}
              iconSize={25}
              color={getColor(focused, selectedTheme)}
              style={styles.upsideDownAndMirrored}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              iconName={'person'}
              iconSize={25}
              color={getColor(focused, selectedTheme)}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Settings'}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              iconName={'settings'}
              iconSize={25}
              color={getColor(focused, selectedTheme)}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Logout'}
        component={LogoutComponent}
        options={{
          tabBarButton: () => (
            <Button
              buttonColor={selectedTheme.footerBackgroundColor}
              iconColor={selectedTheme.red}
              iconName="log-out"
              onPress={() => showAlert()}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

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

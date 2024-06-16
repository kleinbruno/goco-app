import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen, SettingsScreen} from '../screens';
import {Icon, Button, Alert} from '../components';
import {StyleSheet} from 'react-native';
import {useContext} from 'react';
import {ThemeContext, AuthenticationContext} from '../contexts';

const Tab = createBottomTabNavigator();

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

const showLogoutAlert = setIsSignedIn => {
  Alert({
    titleText: 'Logout',
    message: 'Are you sure you want to logout?',
    onPress: () => setIsSignedIn(false),
  });
};

export function AppTabs() {
  const {selectedTheme} = useContext(ThemeContext);
  const {setIsSignedIn} = useContext(AuthenticationContext);

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
              onPress={() => showLogoutAlert(setIsSignedIn)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

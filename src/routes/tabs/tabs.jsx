import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen, SettingsScreen} from '../../screens';
import {Icon, Button, Alert} from '../../components';
import {styles} from './tabs.styles';
import {useContext} from 'react';
import {ThemeContext, AuthenticationContext} from '../../contexts';
import {
  loginTexts,
  commonTexts,
  profileTexts,
  settingsTexts,
} from '../../translations/en';

const Tab = createBottomTabNavigator();

function getColor(focused, selectedTheme) {
  return focused ? selectedTheme.primaryColor : selectedTheme.inactiveColor;
}

const LogoutComponent = () => {
  return null;
};

const showLogoutAlert = setIsSignedIn => {
  Alert({
    titleText: loginTexts.logout,
    message: loginTexts.logoutMessage,
    onPress: () => setIsSignedIn(false),
  });
};

export function AppTabs() {
  const {selectedTheme} = useContext(ThemeContext);
  const {setIsSignedIn} = useContext(AuthenticationContext);

  return (
    <Tab.Navigator
      initialRouteName={commonTexts.GoCo}
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
        name={commonTexts.GoCo}
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
        name={profileTexts.profile}
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
        name={settingsTexts.settings}
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
        name={loginTexts.logout}
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

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
import {ThemeContext} from '../contexts';

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

export function Routes() {
  const {selectedTheme} = useContext(ThemeContext);

  return (
    <NavigationContainer>
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
          component={LoginScreen}
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
                onPress={() => Alert.alert('You clicked the button!')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import {Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen, SettingsScreen} from '../screens';
import {colorPalette} from '../colors';
import {Icon, Button} from '../components';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

function getColor(focused) {
  return focused
    ? colorPalette.lightPrimaryColor
    : colorPalette.lightInactiveColor;
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
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'GoCo'}
        screenOptions={{
          tabBarActiveTintColor: colorPalette.lightPrimaryColor,
          tabBarInactiveTintColor: colorPalette.lightInactiveColor,
          tabBarStyle: {backgroundColor: colorPalette.white},
        }}>
        <Tab.Screen
          name={'GoCo'}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                iconName={'refresh'}
                iconSize={25}
                color={getColor(focused)}
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
                color={getColor(focused)}
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
                color={getColor(focused)}
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
                buttonColor={colorPalette.white}
                iconColor={colorPalette.red}
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

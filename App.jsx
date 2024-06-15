import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './src/screens';
import {colorPalette} from './src/colors';
import {Icon} from './src/components';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

function getColor(focused) {
  return focused
    ? colorPalette.lightPrimaryColor
    : colorPalette.lightInactiveColor;
}

const styles = StyleSheet.create({
  upsideDownAndMirrored: {
    transform: [{rotate: '140deg'}, {scaleX: -1}],
  },
});

function App() {
  const isDarkMode = useColorScheme() === 'dark';

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
          name={'Logout'}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                iconName={'log-out'}
                iconSize={25}
                color={getColor(focused)}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './src/screens';
import { colorPalette } from './src/colors';

const Tab = createBottomTabNavigator();

function getColor(focused) {
  return focused
    ? colorPalette.lightPrimaryColor
    : colorPalette.lightInactiveColor;
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          tabBarActiveTintColor: colorPalette.lightPrimaryColor,
          tabBarInactiveTintColor: colorPalette.lightInactiveColor,
        }}
        barStyle={{backgroundColor: colorPalette.white}}>
        <Tab.Screen
          name={'Home'}
          component={HomeScreen}
          // options={{
          //   tabBarIcon: ({ focused }) => (
          //     <RealIcon
          //       iconName={'checkmark-done-sharp'}
          //       iconSize={25}
          //       color={getColor(focused)}
          //     />
          //   ),
          // }}
        />
        <Tab.Screen
          name={'2'}
          component={HomeScreen}
          // options={{
          //   tabBarIcon: ({ focused }) => (
          //     <RealIcon
          //       iconName={'checkmark-done-sharp'}
          //       iconSize={25}
          //       color={getColor(focused)}
          //     />
          //   ),
          // }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

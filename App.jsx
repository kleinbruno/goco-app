import React from 'react';
import { useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <View />
    </NavigationContainer>
  );
}

export default App;

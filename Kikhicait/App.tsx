import React from 'react';
import RootNavigator from './Navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { useFonts } from "expo-font";


export const Icon = createIconSetFromIcoMoon(
  require('./assets/icomoon/selection.json'),
  'icomoon',
  'icomoon.ttf');

export default function App() {
  const [fontsLoaded] = useFonts({
    icomoon: require('./assets/icomoon/icomoon.ttf')
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}


const mainTheme = {
  main: {
    background: '#1F0536',
    whiteLabelColor: 'white',
    blueLabelColor: '#2023E6'
  }
}

export const mainThemeContext = React.createContext(mainTheme);
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  KoHo_300Light,
  KoHo_400Regular,
  KoHo_500Medium,
  KoHo_700Bold
} from '@expo-google-fonts/koho';

import theme from './src/global/styles/theme';

import {Routes} from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    KoHo_300Light,
    KoHo_400Regular,
    KoHo_500Medium,
    KoHo_700Bold
  });
  if(!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" backgroundColor='transparent' />
      <Routes />
    </ThemeProvider>
  );
}

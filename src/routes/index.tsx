import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { AppRoutes } from './app.routes';
import { DetailPoint } from '../screens/DetailPoint';
import { PointOnMap } from '../screens/PointOnMap';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
          <Screen name='home' component={Home} />
          <Screen name='approutes' component={AppRoutes} />
          <Screen name='detailpoint' component={DetailPoint} />
          <Screen name='pointonmap' component={PointOnMap} />
      </Navigator>
    </NavigationContainer>
  )
}
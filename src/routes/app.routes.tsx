import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Home} from '../screens/Home';
import {Search} from '../screens/Search';
import {LocationPoint} from '../screens/LocationPoint';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen name="home" component={Home} />
      <Screen name="search" component={Search} />
      <Screen name="locationpoint" component={LocationPoint} />
    </Navigator>
  )
}


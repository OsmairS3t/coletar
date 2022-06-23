import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components'

import { Search } from '../screens/Search';
import { LocationPoint } from '../screens/LocationPoint';
import { MaterialIcons } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: theme.colors.green_dark,
      tabBarActiveBackgroundColor: theme.colors.green_lignt2,
      tabBarInactiveBackgroundColor: theme.colors.green_lignt2,
      tabBarLabelPosition: 'below-icon',
      
    }}>
      <Screen name="Buscar" component={Search} 
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="search"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen name="Locais" component={LocationPoint} 
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="location-on"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  )
}


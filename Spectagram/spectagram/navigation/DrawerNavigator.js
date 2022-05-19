import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import StackNavigator from './StackNavigator'
import ProfileScreen from '../screens/Profile';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen
        name = 'Home'
        component = {StackNavigator}
      />

      <Drawer.Screen
        name = 'Profile'
        component = {ProfileScreen}
      />
    </Drawer.Navigator>
  )
}

export default  DrawerNavigator; 
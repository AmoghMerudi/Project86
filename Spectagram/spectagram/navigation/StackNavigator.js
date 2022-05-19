import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabNavigator from './tabNavigator';
import StoryScreen from '../screens/storyScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return(
    <Stack.Navigator initialRouteName = 'Home' screenOptions = {{headerShown: false}}>
          <Stack.Screen name = 'Home' component = {BottomTabNavigator}/>
          <Stack.Screen name = 'Story' component = {StoryScreen}/>
    </Stack.Navigator>
  )
}

export default StackNavigator;
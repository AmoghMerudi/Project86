import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import CreatePost from '../screens/CreatePost';
import Feed from '../screens/Feed';

const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    labeled = {false}
    barStyle = {{backgroundColor: '#99301d', height: '8%', borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: 'hidden', position: 'absolute'}}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused ? 'book' : 'book-outline';
          }
          else if(route.name === 'Create Story'){
            iconName = focused ? 'create' : 'create-outline';
          }
          return(
            <Ionicons name = { iconName } size = {size} color = {color}/>
          )
        },
      })}>

      <Tab.Screen 
        name="Feed" 
        component={Feed} 
      />

      <Tab.Screen 
        name="Create Story" 
        component={CreatePost} 
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

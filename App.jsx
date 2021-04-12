import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import stackNavigator from './navigations/stackNavigator';

import tabNavigator from './navigations/tabNavigator';

const Stack = createStackNavigator();
return (
  <NavigationContainer>
    {/* <StatusBar backgroundColor="white" style="black" /> */}
    <StackNavigator />
  </NavigationContainer>
);

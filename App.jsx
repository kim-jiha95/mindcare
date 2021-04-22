import React, { useEffect } from 'react';
import { StyleSheet, LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigations/StackNavigator';
import { Ionicons } from '@expo/vector-icons';

import * as Font from 'expo-font';

export default function App() {
  LogBox.ignoreLogs(['Warning: ...']);

  const loadFont = () => {
    setTimeout(async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      await setReady(true);
    }, 1000);
  };

  useEffect(() => {
    loadFont();
  }, []);
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

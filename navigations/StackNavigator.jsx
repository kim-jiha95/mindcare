import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import SurveyPage from '../pages/SurveyPage';
import DoctorDetailPage from '../pages/DoctorDetailPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignInPage" component={SignInPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="DoctorDetailPage" component={DoctorDetailPage} />
      <Stack.Screen name="SurveyPage" component={SurveyPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

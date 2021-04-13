import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import SurveyPage from '../pages/SurveyPage';
import DoctorDetailPage from '../pages/DoctorDetailPage';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="DoctorDetailPage" component={DoctorDetailPage} />
      <Stack.Screen name="SurveyPage" component={SurveyPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

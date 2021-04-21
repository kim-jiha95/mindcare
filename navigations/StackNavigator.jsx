import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import DoctorPage from '../pages/DoctorPage';
import DoctorDetailPage from '../pages/DoctorDetailPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import SurveyLinkPage from '../pages/SurveyLinkPage';
import MyDetailPage from '../pages/MyDetailPage';
import MyPage from '../pages/MyPage';

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
      <Stack.Screen name="MyPage" component={MyPage} />
      <Stack.Screen name="MyDetailPage" component={MyDetailPage} />
      <Stack.Screen name="SurveyLinkPage" component={SurveyLinkPage} />
      <Stack.Screen name="DoctorPage" component={DoctorPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

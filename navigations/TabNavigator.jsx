import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import HomePage from '../pages/Home/HomePage';
import DoctorPage from '../pages/Doctor/DoctorPage';
// import MyPage from '../pages/Mypage/MyPage';

import MyPage from '../pages/MyPage/MyPage';

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  // 왜넣는지?
  // const TabNavigator = ({ navigation, route }) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
          if (route.name === 'Home') {
            iconName += 'home-sharp';
          } else if (route.name === 'Doctor') {
            iconName += 'people';
          } else if (route.name === 'MyPage') {
            iconName += 'menu';
          }

          return (
            <Ionicons
              name={iconName}
              color={focused ? '#09C5F9' : '#AEAEAE'}
              size={focused ? 28 : 26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: true,
        labelStyle: {
          fontSize: 11,
          fontWeight: '500',
          color: '#AEAEAE',
          bottom: 4,
        },
        activeTintColor: '#3AB27B',
        style: {
          backgroundColor: '#fff',
          borderTopColor: '#eee',
          height: Platform.OS === 'ios' ? 85 : 60,
        },
      }}
    >
      <Tabs.Screen name="Home" component={HomePage} />
      <Tabs.Screen name="Doctor" component={DoctorPage} />
      <Tabs.Screen name="MyPage" component={MyPage} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;

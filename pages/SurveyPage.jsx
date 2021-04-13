import { Container } from 'native-base';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import SurveyLinkPage from './SurveyLinkPage';

export default function SurveyPage() {
  <HeaderComponent />;
  return (
    <Container>
      <HeaderComponent />
      <SurveyLinkPage />
      {/* <View>
        <Text>DoctorPage</Text>
      </View> */}
    </Container>
  );
}

const styles = StyleSheet.create({});

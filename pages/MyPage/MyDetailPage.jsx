import { Container } from 'native-base';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import HeaderComponent from '../../components/Doctor/HeaderComponent';
import MyCouncelCard from '../../components/MyPage/MyCouncelCard';
import SurveyLinkPage from '../Home/SurveyLinkPage';

export default function MyDetailPage() {
  return (
    <Container>
      <Image
        style={styles.mainimg}
        source={require('../../assets/cute.png')}
      ></Image>
      <MyCouncelCard />
    </Container>
  );
}

const styles = StyleSheet.create({
  mainimg: {
    width: 200,
    height: 200,
    marginLeft: 90,
    marginTop: 50,
    resizeMode: 'cover',
  },
});

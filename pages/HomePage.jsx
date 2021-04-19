import { Container } from 'native-base';
import React, { useRef } from 'react';
import GradientButton from 'react-native-gradient-buttons';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  View,
  Text,
  Dimensions,
  Button,
} from 'react-native';

import TestCard from '../components/TestCard';
import HeaderComponent from '../components/HeaderComponent';
import SurveyLinkPage from './SurveyLinkPage';

import { ScrollView } from 'react-native-gesture-handler';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { Dialog } from 'react-native-paper';

const diviceWidth = Dimensions.get('window').width;

export default function HomePage({ navigation }) {
  const goSignOut = () => {
    logout();
    navigation.navigate('SignInPage');
  };
  return (
    <Container>
      <View>
        <HeaderComponent />
      </View>
      <ScrollView>
        {/* 무료 설문조사 */}
        <View style={styles.TestCardBox}>
          <TestCard
            text={'심리 검사'}
            img={
              'https://i.pinimg.com/originals/a7/90/81/a7908140ca1f892ee0a5d931867c8050.png'
            }
            Link={
              'https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC'
            }
            navigation={navigation}
          />

          <TestCard
            text={'성격 검사'}
            img={
              'http://tbc.imgdl.xcache.kinxcdn.com/cdn001/20200320/329370782_0321_6.jpg'
            }
            Link={
              'https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC'
            }
            navigation={navigation}
          />
        </View>

        <View style={styles.TestCardBox}>
          <TestCard
            text={'자존감 검사'}
            img={
              'https://i.pinimg.com/originals/d3/0f/66/d30f66d5d869b55d07230930d6ea19b5.jpg'
            }
            Link={
              'https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC'
            }
            navigation={navigation}
          />
          <TestCard
            text={'우울증 검사'}
            img={'https://pbs.twimg.com/media/DSrgVpPU8AAkzyO.jpg'}
            Link={
              'https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC'
            }
            navigation={navigation}
          />
        </View>

        <View style={styles.TestCardBox}>
          <TestCard
            text={'직무스트레스 검사'}
            img={
              'https://i.pinimg.com/736x/23/3c/40/233c400a70f03d2f4ad59fb3bf6c0bab.jpg'
            }
            Link={
              'https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC'
            }
            navigation={navigation}
          />
          <TestCard
            text={'취업스트레스 검사'}
            img={
              'https://tumblbug-pci.imgix.net/dfd6741e6221c177ba50d064c6f64cbc6f8edc53/4282c81ca07bc0b2a4c4b284517a17cd3cc5bb8b/18b515c36d680892097e0117e6987d490b675eed/9c19852c-b3b7-443e-b95f-5ee4ab0892f8.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=6fe71d5c0644b2493499f0fb686502c0'
            }
            Link={
              'https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC'
            }
            navigation={navigation}
          />
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.ExperienceBox}
            onPressAction={() => Linking.openURL(`tel:01051252908`)}
          >
            <Text style={{ fontSize: 15, textAlign: 'center' }}>
              마인드케어 체험해보기
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ExperienceBox}>
            <Text style={{ fontSize: 15, textAlign: 'center' }}>상담하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  logout: {
    alignSelf: 'center',
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
  },
  Message: {
    width: 350,
    height: 300,
    marginTop: 50,
    flex: 1,
    alignSelf: 'center',
    borderRadius: 15,
    resizeMode: 'contain',
  },
  SurveyButton: {
    width: 50,
    height: 100,
    left: 60,
    top: 220,
  },
  Survey: {
    width: 150,
    height: 150,
    left: 60,
    top: 100,
  },
  ExperienceBox: {
    flex: 1,
    marginTop: diviceWidth * 0.3,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 150,
    height: 80,
    backgroundColor: 'orange',
    borderRadius: 10,
    margin: 10,
  },
  TestCardBox: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

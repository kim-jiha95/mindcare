import { Container } from 'native-base';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  View,
  Text,
  Dimensions,
  Button,
  Modal,
} from 'react-native';
import TestCard from '../../components/Doctor/TestCard';
import HeaderComponent from '../../components/Doctor/HeaderComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { logout } from '../../config/BackData';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const diviceWidth = Dimensions.get('window').width;
const main = require('../../assets/Main.png');

export default function HomePage({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container>
      <HeaderComponent />

      <View style={styles.imageContainer}>
        <Image source={main} style={styles.mainImage} />
      </View>

      <ScrollView>
        <Modal style={styles.modal} visible={modalOpen} animationType="slide">
          <Ionicons
            style={styles.back}
            name="chevron-back"
            size={40}
            color="grey"
            onPress={() => setModalOpen(false)}
          />
          <View style={{ flex: 1, padding: 30 }}>
            <Text
              style={{ fontSize: 20, textAlign: 'center', marginBottom: 30 }}
            >
              다양한 검사를 통해 심리상태를 알아보세요.
            </Text>
            <View style={styles.TestCardBox}>
              <TestCard
                text={'심리 검사'}
                img={
                  'https://i.pinimg.com/originals/a7/90/81/a7908140ca1f892ee0a5d931867c8050.png'
                }
                Link={'https://egogramtest.kr/'}
                navigation={navigation}
                setModalOpen={setModalOpen}
              />

              <TestCard
                text={'성격 유형 검사'}
                img={
                  'http://tbc.imgdl.xcache.kinxcdn.com/cdn001/20200320/329370782_0321_6.jpg'
                }
                Link={'https://together.kakao.com/big-five'}
                navigation={navigation}
                setModalOpen={setModalOpen}
              />
            </View>

            <View style={styles.TestCardBox}>
              <TestCard
                text={'자존감 검사'}
                img={
                  'https://i.pinimg.com/originals/d3/0f/66/d30f66d5d869b55d07230930d6ea19b5.jpg'
                }
                Link={'http://aiselftest.com/selfesteem/'}
                navigation={navigation}
                setModalOpen={setModalOpen}
              />
              <TestCard
                text={'우울증 검사'}
                img={'https://pbs.twimg.com/media/DSrgVpPU8AAkzyO.jpg'}
                Link={'http://aiselftest.com/depressive/'}
                navigation={navigation}
                setModalOpen={setModalOpen}
              />
            </View>

            <View style={styles.TestCardBox}>
              <TestCard
                text={'번아웃증후근 테스트'}
                img={
                  'https://i.pinimg.com/736x/23/3c/40/233c400a70f03d2f4ad59fb3bf6c0bab.jpg'
                }
                Link={'http://aiselftest.com/burnout/'}
                navigation={navigation}
                setModalOpen={setModalOpen}
              />
              <TestCard
                text={'취업스트레스 검사'}
                img={
                  'https://tumblbug-pci.imgix.net/dfd6741e6221c177ba50d064c6f64cbc6f8edc53/4282c81ca07bc0b2a4c4b284517a17cd3cc5bb8b/18b515c36d680892097e0117e6987d490b675eed/9c19852c-b3b7-443e-b95f-5ee4ab0892f8.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=6fe71d5c0644b2493499f0fb686502c0'
                }
                Link={'http://aiselftest.com/stress/'}
                navigation={navigation}
                setModalOpen={setModalOpen}
              />
            </View>
          </View>
        </Modal>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: diviceWidth * 0.1,
          }}
        >
          <TouchableOpacity
            style={styles.ExperienceBox}
            onPress={() => Linking.openURL(`tel:01051252908`)}
          >
            <Text style={{ fontSize: 15, textAlign: 'center', color: 'white' }}>
              마인드케어 체험해보기
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ExperienceBox}
            onPress={() => setModalOpen(true)}
          >
            <Text style={{ fontSize: 15, textAlign: 'center', color: 'white' }}>
              내 마음{'\n'}알아보기
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ExperienceBox}
            onPress={() => navigation.navigate('DoctorPage')}
          >
            <Text style={{ fontSize: 15, textAlign: 'center', color: 'white' }}>
              상담 예약하기
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
  },
  mainImage: {
    width: diviceWidth * 1,
    height: diviceWidth * 1,
    resizeMode: 'contain',
    borderBottomWidth: 0,
  },
  modal: {
    padding: 30,
    marginTop: 100,
  },
  logout: {
    alignSelf: 'center',
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
  },
  back: {
    marginTop: 50,
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
    marginTop: diviceWidth * 0.1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 150,
    height: 80,
    backgroundColor: '#47D3AB',
    borderRadius: 10,
    margin: 10,
  },
  TestCardBox: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 5,
  },
});

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
import { Container } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Doctorcard from '../components/DoctorCard';

const data = require('../data.json');

// function getCheckboxValue() {
//   // 선택된 목록 가져오기
//   const query = 'input[name="animal"]:checked';
//   const selectedEls = document.querySelectorAll(query);

//   // 선택된 목록에서 value 찾기
//   let result = '';
//   selectedEls.forEach((el) => {
//     result += el.value + ' ';
//   });

//   // 출력
//   document.getElementById('result').innerText = result;
// }

export default function DoctorPage() {
  <HeaderComponent />;
  return (
    <Container style={styles.container}>
      <Text style={styles.tmphead}>Counsultants</Text>
      <ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.ListCard}>
            {data.hurtList.map((content, i) => {
              return (
                <TouchableOpacity
                  style={styles.HurtCard}
                  // onPress={getCheckboxValue}
                >
                  <Text style={styles.ListText} key={i}>
                    {content.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        {/* <Doctorcard
          img={
            'https://img5.yna.co.kr/etc/inner/KR/2020/05/27/AKR20200527146300005_03_i_P2.jpg'
          }
          name={'채송화'}
        /> */}

        <TouchableOpacity style={styles.DoctorCard}>
          {/* 상담사 사진 */}
          <Image
            source={{
              uri:
                'https://img5.yna.co.kr/etc/inner/KR/2020/05/27/AKR20200527146300005_03_i_P2.jpg',
            }}
            style={styles.DoctorImage}
          />
          {/* 상담사 이름 */}
          <Text style={styles.DoctorName}>채송화</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9F160',
  },
  tmphead: {
    margin: 30,
    textAlign: 'center',
    fontSize: 30,
  },
  ListCard: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ListText: {
    fontSize: 17,
  },
  HurtCard: {
    height: 40,
    padding: 10,
    margin: 10,
    borderWidth: 0.1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  DoctorCard: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    borderWidth: 0.1,
    borderRadius: 8,
  },
  DoctorImage: {
    height: 160,
    width: 160,
    borderRadius: 240,
    resizeMode: 'cover',
  },
  DoctorName: {
    fontSize: 40,
    paddingLeft: 30,
    alignSelf: 'center',
  },
});

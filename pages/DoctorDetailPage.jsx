import { Container, Footer, Button } from 'native-base';
import React, { useState, useEffect } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  StyleSheet,
  Image,
  Modal,
  Alert,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';

import TimeCard from '../components/TimeCard';
import Loading from './Loading';
import HeaderComponent from '../components/HeaderComponent';
import { getDoctorDetail } from '../config/BackData';
import { ScrollView } from 'react-native-gesture-handler';
import { reservationday } from '../config/BackData';
import data from '../data.json';

const diviceWidth = Dimensions.get('window').width;

export default function DoctorDetailPage({ navigation, route }) {
  const DoctorInfo = route.params;

  // 선택한 의사의 세부정보 받아오기 ■
  const [DoctorDetail, setDoctorDetail] = useState();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    download();
  }, []);

  const download = async () => {
    const result = await getDoctorDetail(DoctorInfo.id);
    setDoctorDetail(result);
    setReady(true);
  };
  // ■■

  // 데이트피커 + 데이트피커 모달 관리 ※ (함수들 잘 이해못함)
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = async (date) => {
    setDatePickerVisibility(false);
    setModalVisible(true);
    hideDatePicker();
    const gotTime = await reservationday(date, DoctorInfo.id);
    setReservationTime(gotTime.results);
  };

  const [ReservationTime, setReservationTime] = useState([]);

  const setdateFunc = (itemInputdate) => {
    setdate(itemInputdate);
  };
  // ※

  useEffect(() => {}, [isDatePickerVisible]);

  return ready ? (
    <Container>
      <HeaderComponent />
      <Image style={styles.DoctorImage} source={{ uri: DoctorDetail.img }} />

      <ScrollView>
        <View style={styles.InfobBox}>
          <Text style={styles.DoctorName}>이름 : {DoctorDetail.name}</Text>
          <Text style={styles.DoctorMajor}>
            전문분야 : {DoctorDetail.specialties.join('  ')}
          </Text>
          <Text style={styles.DoctorPart}>
            {DoctorDetail.careers.join('\n')}
          </Text>
        </View>

        <Footer style={styles.footer}>
          <TouchableOpacity
            style={styles.DayButton}
            title="Show Date Picker"
            backgroundColor="black"
            onPress={showDatePicker}
          >
            {/* time모달 시작 */}
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    {/* 진료시간 박스 */}
                    <View style={styles.timetable}>
                      {ReservationTime.map((Times, i) => {
                        return <TimeCard Times={Times} key={i} />;
                      })}
                    </View>

                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>뒤로가기</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              {/* <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.textStyle}>day_picker_confirm</Text>
              </Pressable> */}
              {/* time모달 끝 */}
            </View>

            <View
              style={{
                width: diviceWidth * 0.3,
                height: diviceWidth * 0.2,
              }}
            >
              <Image
                source={require('../assets/calendar.png')}
                style={{
                  width: 80,
                  height: 80,
                  marginLeft: 30,
                  flex: 1,
                  resizeMode: 'cover',
                }}
                title="Show Date Picker"
                color="#f194ff"
                onPress={showDatePicker}
              />
            </View>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              // mode="time"
              setFunc={setdateFunc}
              onConfirm={handleConfirm}
              // setModalVisible(true))
              onCancel={hideDatePicker}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Dialbtn}
            onPress={() => Linking.openURL(`tel:01051252908`)}
          >
            <Image style={styles.Dial} source={require('../assets/Dial.png')} />
            {/* <Text>전화로 상담하기</Text> */}
          </TouchableOpacity>
        </Footer>
      </ScrollView>
    </Container>
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({
  calendar: {
    width: 350,
    height: 250,
    left: 150,
    top: 150,
  },
  DoctorImage: {
    width: 300,
    height: 300,
    left: 60,
    top: 60,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  InfobBox: {
    marginTop: diviceWidth * 0.2,
    marginLeft: diviceWidth * 0.1,
    marginRight: diviceWidth * 0.1,
    alignSelf: 'center',
    alignContent: 'center',
  },
  DoctorName: { fontSize: 20 },
  DoctorMajor: { fontSize: 17 },
  DoctorPart: { fontSize: 15 },
  Dialbtn: {
    width: diviceWidth * 0.3,
    height: diviceWidth * 0.2,
    alignSelf: 'center',
    alignItems: 'center',
  },
  Dial: {
    width: 90,
    height: 90,
  },
  footer: {
    marginTop: diviceWidth * 0.25,
    height: diviceWidth * 0.3,
    backgroundColor: 'white',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0,
  },
  DayButton: {
    width: 100,
    height: 60,
    marginRight: 50,
    marginTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 100,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  timetable: {
    flexDirection: 'row',
  },
  TimeBox: {
    borderRadius: 10,
    borderWidth: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    backgroundColor: '#64FCD9',
    width: diviceWidth * 0.43,
    height: diviceWidth * 0.13,
    margin: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  TimeText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
  },
});

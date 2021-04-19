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
import Loading from './Loading';
import HeaderComponent from '../components/HeaderComponent';
import { getDoctorDetail, getDoctorList } from '../config/BackData';
import { ScrollView } from 'react-native-gesture-handler';
import { reservation } from '../config/BackData';
import { reservationday } from '../config/BackData';

const diviceWidth = Dimensions.get('window').width;

export default function DoctorDetailPage({ navigation, route }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [date, setdate] = useState('');
  const [time, settime] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDatePickerVisibility(false);
    // setModalVisible(true);

    reservationday(date);
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  const setdateFunc = (itemInputdate) => {
    setdate(itemInputdate);
  };

  const DoctorInfo = route.params;

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

  useEffect(() => {
    console.log(isDatePickerVisible);
  }, [isDatePickerVisible]);

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
                    <View style={styles.timetable1}>
                      <TouchableOpacity>
                        <Image
                          style={styles.time1}
                          source={require('../assets/rbutton1.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image
                          style={styles.time2}
                          source={require('../assets/rbutton2.png')}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.timetable2}>
                      <TouchableOpacity>
                        <Image
                          style={styles.time3}
                          source={require('../assets/rbutton3.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image
                          style={styles.time4}
                          source={require('../assets/rbutton4.png')}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.timetable3}>
                      <TouchableOpacity>
                        <Image
                          style={styles.time5}
                          source={require('../assets/rbutton5.png')}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Image
                          style={styles.time6}
                          source={require('../assets/rbutton6.png')}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.timetable4}>
                      <TouchableOpacity>
                        <Image
                          style={styles.time7}
                          source={require('../assets/rbutton7.png')}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Image
                          style={styles.time8}
                          source={require('../assets/rbutton8.png')}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.timetable5}>
                      <TouchableOpacity>
                        <Image
                          style={styles.time9}
                          source={require('../assets/rbutton9.png')}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Image
                          style={styles.time10}
                          source={require('../assets/rbutton10.png')}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.timetable6}>
                      <TouchableOpacity>
                        <Image
                          style={styles.time11}
                          source={require('../assets/rbutton11.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image
                          style={styles.time12}
                          source={require('../assets/rbutton12.png')}
                        />
                      </TouchableOpacity>
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
            <Image
              source={require('../assets/calendar.png')}
              style={{
                borderwidth: 1,
                borderColor: 'black',
                width: 80,
                height: 80,
                // left: 150,
                marginLeft: 30,
                marginBottom: 40,
              }}
              title="Show Date Picker"
              color="#f194ff"
              onPress={showDatePicker}
            />

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
    marginTop: 75,
  },
  Dial: {
    width: 70,
    height: 60,
  },
  footer: {
    marginTop: diviceWidth * 0.15,

    borderTopWidth: 0,
    margin: 10,
    backgroundColor: 'white',
    borderBottomWidth: 0,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0,
  },
  DayButton: {
    // borderWidth: 1,
    borderColor: 'black',
    width: 100,
    height: 60,
    marginRight: 50,
    marginBottom: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
  timetable1: {
    flexDirection: 'row',
    marginTop: 10,
  },
  timetable2: {
    flexDirection: 'row',
    marginTop: 10,
  },
  timetable3: {
    flexDirection: 'row',
    marginTop: 10,
  },
  timetable4: {
    flexDirection: 'row',
    marginTop: 10,
  },
  timetable5: {
    flexDirection: 'row',
    marginTop: 10,
  },
  timetable6: {
    flexDirection: 'row',
    marginTop: 10,
  },
  time2: {
    marginLeft: 5,
  },
  time4: {
    marginLeft: 5,
  },
  time6: {
    marginLeft: 5,
  },
  time8: {
    marginLeft: 5,
  },
  time10: {
    marginLeft: 5,
  },
  time12: {
    marginLeft: 5,
  },
});

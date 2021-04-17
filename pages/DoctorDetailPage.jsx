import { Container, Footer, Button } from 'native-base';
import React, { useState, useEffect } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  StyleSheet,
  Image,
  View,
  Text,
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

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    reservationday(date);
    console.warn('A date has been picked: ', date);
    // console.warn('a', mode);
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
            <Text>대면진료 예약하기</Text>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              // mode="time"
              setFunc={setdateFunc}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            {/* <Text>대면진료 예약하기</Text> */}
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
    width: 70,
    height: 60,
  },
  footer: {
    marginTop: diviceWidth * 0.25,

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
});

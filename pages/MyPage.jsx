import { Container } from 'native-base';
import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Button,
  Dimensions,
  Image,
} from 'react-native';

import Loading from './Loading';
import CouncelCard from '../components/CouncelCard';
import HeaderComponentWithBack from '../components/HeaderComponentWithBack';
import HeaderComponent from '../components/HeaderComponent';
import ProgressCircle from 'react-native-progress-circle';
import { Ionicons } from '@expo/vector-icons';

import { Avatar } from 'react-native-elements';
import { getAppointment } from '../config/BackData';
import { logout } from '../config/BackData';

import { SimpleLineIcons } from '@expo/vector-icons';

const diviceWidth = Dimensions.get('window').width;

export default function Mypage({ navigation }) {
  const [Appointments, setAppointments] = useState([]);
  const [Average, setAverage] = useState([]);
  const [ready, setReady] = useState(false);

  const goSignOut = () => {
    logout();
    navigation.navigate('SignInPage');
  };

  useEffect(() => {
    download();
  }, []);

  const download = async () => {
    const result = await getAppointment();
    setAverage(result);
    setAppointments(result.results);
    setReady(true);
  };

  return ready ? (
    <Container>
      <View>
        <HeaderComponentWithBack />
      </View>

      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 50,
        }}
      >
        <View style={{ backgroundColor: 'white', flex: 1 }}></View>
        <ProgressCircle
          percent={65}
          radius={50}
          borderWidth={8}
          color="#00f1ff"
          shadowColor="#999"
          bgColor="#fff"
        >
          <Text style={{ fontSize: 10 }}>{'평균 상담 주기'}</Text>
          <Text style={{ fontSize: 10, marginTop: 5 }}>
            {Average.avgPeriod} day
          </Text>
        </ProgressCircle>

        <View style={{ backgroundColor: 'white', flex: 1 }}></View>
        <ProgressCircle
          percent={70}
          radius={50}
          borderWidth={8}
          color="#00f1ff"
          shadowColor="#999"
          bgColor="#fff"
          width={'150'}
        >
          <Text style={{ fontSize: 10 }}>{'다음 상담 일자'}</Text>
          <Text style={{ fontSize: 10, marginTop: 5 }}>
            - {Average.remainPeriod} day
          </Text>
        </ProgressCircle>
        <View>
          {/* <TouchableOpacity onPress={goSignOut}>
            <Image
              style={styles.logoutbtn}
              source={require('../assets/logout.png')}
            ></Image>
          </TouchableOpacity> */}
        </View>
        <View style={{ backgroundColor: 'white', flex: 1 }}></View>
      </SafeAreaView>
      <SafeAreaView style={styles.status}>
        <Text style={styles.check}>진행여부 </Text>

        <Text style={styles.Date}>일자 </Text>
        <Text style={styles.Time}>시간 </Text>
        <Text style={styles.Condition}>상태 </Text>
      </SafeAreaView>

      <View style={{ flex: 3.1 }}>
        <ScrollView>
          <View style={styles.councelrecord}>
            {Appointments.map((Appointment, i) => {
              return (
                <CouncelCard
                  Appointment={Appointment}
                  key={i}
                  navigation={navigation}
                  download={download}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </Container>
  ) : (
    <Loading />
  );
}
const styles = StyleSheet.create({
  Date: {
    marginLeft: 20,
  },
  Time: {
    marginLeft: 40,
  },
  check: {
    marginLeft: 20,
  },
  Condition: {
    marginLeft: 45,
  },
  card: {
    marginBottom: 70,
  },
  councelrecord: {
    marginTop: 30,
  },
  status: {
    marginTop: 350,
    marginLeft: 50,
    flexDirection: 'row',
    position: 'absolute',
  },
  logoutbtn: { width: 50, height: 50, marginTop: 70, marginLeft: 10 },
});

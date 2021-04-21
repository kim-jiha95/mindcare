import { Container } from 'native-base';
import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Loading from './Loading';
import CouncelCard from '../components/CouncelCard';

import HeaderComponent from '../components/HeaderComponent';
import ProgressCircle from 'react-native-progress-circle';
import { Avatar } from 'react-native-elements';
// import MyDetailPage from './MyDetailPage';

import { getAppointment } from '../config/BackData';

export default function Mypage({ navigation }) {
  const [Appointments, setAppointments] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    download();
  }, []);

  const download = async () => {
    const result = await getAppointment();
    setAppointments(result);
    setReady(true);
  };

  // const download = async () => {
  //   const result = await getCouncelList();
  //   setCouncelLists(result);
  //   setReady(true);
  // };

  return ready ? (
    <Container>
      <View>
        <HeaderComponent />
      </View>
      <View
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
          <Text style={{ fontSize: 10, marginTop: 5 }}>{'25 Day'}</Text>
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
          <Text style={{ fontSize: 10, marginTop: 5 }}>{'-6 Day'}</Text>
        </ProgressCircle>
        <View style={{ backgroundColor: 'white', flex: 1 }}></View>
      </View>

      <View style={styles.status}>
        <Text style={styles.check}>진행여부 </Text>

        <Text style={styles.Date}>일자 </Text>
        <Text style={styles.Time}>시간 </Text>
        <Text style={styles.Condition}>상태 </Text>
      </View>
      {/* <TouchableOpacity
        onPress={() => {
          goDetailPage;
        }}
      > */}
      <View>
        {/* <View style={styles.card}> */}
        <ScrollView>
          <View style={styles.councelrecord}>
            {Appointments.map((Appointment, i) => {
              return (
                <CouncelCard
                  Appointment={Appointment}
                  key={i}
                  navigation={navigation}
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
  border: {
    height: 3,
    backgroundColor: '#f2f2f2',
    borderRadius: 100,
    marginLeft: 40,
  },
  status: {
    flex: 1.0,
    flexDirection: 'row',
    marginTop: 90,
    // marginRight: 50,
    // marginLeft: 10,
  },
  Date: {
    marginTop: 30,
    // marginRight: 20,
    marginLeft: 40,
  },
  Time: {
    marginLeft: 40,
    marginTop: 30,
  },
  check: {
    // marginRight: 50,
    // marginLeft: 10,
    marginTop: 30,
    // postiion: 'absolute',
  },
  Condition: {
    marginLeft: 40,
    marginTop: 30,
  },
  card: {
    marginBottom: 70,
  },
  councelrecord: {
    marginTop: 150,
  },
  status: {
    flex: 1,
    marginTop: 260,
    marginLeft: 100,
    flexDirection: 'row',
    position: 'absolute',
  },
});

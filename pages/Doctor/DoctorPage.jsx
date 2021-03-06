import { Container } from 'native-base';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import HeaderComponent from '../../components/Doctor/HeaderComponent';
import CheckBox from '../../components/Doctor/CheckBox';
import DoctorCard from '../../components/Doctor/DoctorCard';
import Loading from '../utilities/Loading';

const data = require('../../data.json');

import { getDoctorList } from '../../config/BackData';

export default function DoctorPage({ navigation }) {
  const [DoctorLists, setDoctorLists] = useState();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    download();
  }, []);

  const download = async () => {
    const result = await getDoctorList();
    setDoctorLists(result);
    setReady(true);
  };

  return ready ? (
    <Container style={styles.container}>
      <View style={styles.headerText}>
        <Text style={styles.tmphead}>Doctors</Text>
      </View>
      <ScrollView>
        {/* 고민 리스트 */}
        <View style={styles.ListCard}>
          {data.hurtList.map((content, i) => {
            return (
              <View key={i}>
                <CheckBox style={styles.HurtCard} hurt={content.title} />
              </View>
            );
          })}
        </View>
        {/* 상담사 리스트 */}
        {DoctorLists.map((DoctorList, i) => {
          return (
            <DoctorCard
              DoctorList={DoctorList}
              key={i}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </Container>
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({
  headerText: {
    height: 130,
    borderBottomWidth: 0.1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  tmphead: {
    marginTop: 60,
    textAlign: 'center',
    fontSize: 30,
  },
  ListCard: {
    padding: 20,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ListText: {
    fontSize: 17,
  },
  HurtCard: {
    height: 40,
    padding: 10,
    margin: 10,
    borderWidth: 0.1,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
});

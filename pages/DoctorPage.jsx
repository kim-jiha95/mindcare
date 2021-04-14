import { Container } from 'native-base';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import { getDoctorList } from '../config/BackData';
import DoctorCard from '../components/DoctorCard';
import Loading from './Loading';

const data = require('../data.json');

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
      <Text style={styles.tmphead}>Counsultants</Text>
      <ScrollView>
        {/* 고민카테고리 */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.ListCard}>
            {data.hurtList.map((content, i) => {
              return (
                <TouchableOpacity style={styles.HurtCard} key={i}>
                  <Text style={styles.ListText}>{content.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

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
  container: {},
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
    backgroundColor: 'white',
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

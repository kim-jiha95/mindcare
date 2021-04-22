import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const diviceWidth = Dimensions.get('window').width;

import { doReservation } from '../config/BackData';

export default function TimeCard({
  navigation,
  Times,
  possible,
  id,
  date,
  time,
  setModalVisible,
}) {
  const upReservation = () => {
    doReservation(id, date, time, navigation);
    setModalVisible(false);
  };
  if (possible) {
    return (
      <TouchableOpacity style={styles.TimeBox} onPress={upReservation}>
        <View>
          <Text style={styles.TimeText}>
            👨‍⚕️{Times.stringTime}~{Times.stringTimeEnd}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  return <></>;
}
const styles = StyleSheet.create({
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
    width: diviceWidth * 0.36,
    height: diviceWidth * 0.13,
    margin: 10,
    marginTop: 15,
    marginBottom: 20,
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

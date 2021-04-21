import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const diviceWidth = Dimensions.get('window').width;
export default function TimeCard({ Times }) {
  useEffect(() => {
    // console.log('me');
    // console.log(Times);
  }, []);
  return (
    <TouchableOpacity style={styles.TimeBox}>
      <View>
        <Text style={styles.TimeText}>
          👨‍⚕️
          {Times.stringTime}~{Times.stringTimeEnd}
        </Text>
      </View>
    </TouchableOpacity>
  );
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
    width: diviceWidth * 0.2,
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

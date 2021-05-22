import { Container } from 'native-base';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import { doRemove } from '../../config/BackData';

export default function CouncelCard({ navigation, Appointment, download }) {
  const remove = async () => {
    await doRemove(Appointment.id);

    download();
  };

  return (
    <View style={styles.box}>
      <TouchableOpacity
        style={styles.councelBox}
        style={styles.councelBox}
        style={styles.CouncelrCard}
        onPress={() => navigation.navigate('MyDetailPage', Appointment)}
      >
        <View style={styles.MyBox}>
          {Appointment.completed ? (
            <Image
              style={styles.successbutton}
              source={require('../../assets/successbtn.png')}
            ></Image>
          ) : (
            <Image
              style={styles.successbutton}
              source={require('../../assets/wait_btn.png')}
            ></Image>
          )}

          <Text style={styles.Crecord}>{Appointment.date}</Text>
          <Text style={styles.Trecord}>
            {Appointment.stringTime}~{Appointment.stringEndTime}
          </Text>
        </View>
        <View style={styles.border}></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => remove()} style={styles.cancelbtn}>
        <Image
          resizeMode="contain"
          source={require('../../assets/remove.png')}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Mycouncel: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },

  CouncelNum: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 5,
  },
  CouncelDay: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 20,
  },
  successbutton: {
    marginLeft: 40,
    width: 72,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  cancelbtn: {
    flex: 1,
    marginTop: 10,
    width: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CouncelTime: {
    fontSize: 10,
    marginTop: 15,
    marginLeft: 20,
  },
  CouncelCondition: {
    fontSize: 25,
    marginTop: 15,
    marginLeft: 40,
  },
  border: {
    height: 3,
    backgroundColor: '#f2f2f2',
    borderRadius: 100,
    marginLeft: 40,
  },
  MyBox: {
    flexDirection: 'row',
  },
  Crecord: {
    marginTop: 20,
    fontSize: 12,
    marginLeft: 10,
  },
  CouncelrCard: {
    marginTop: 5,
  },
  Trecord: {
    marginLeft: 10,
    marginTop: 20,
    fontSize: 12,
  },
  cancelbutton: {
    width: 45,
    height: 15,

    marginLeft: 20,
  },
  box: {
    flexDirection: 'row',
    height: 60,
  },

  councelBox: {
    width: '90%',
  },
});

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
import { Avatar } from 'react-native-elements';

export default function CouncelCard({ navigation, Appointment }) {
  return (
    <View style={styles.box}>
      <TouchableOpacity
        style={styles.CouncelrCard}
        onPress={() => navigation.navigate('MyDetailPage', Appointment)}
      >
        <View style={styles.MyBox}>
          <Avatar
            size="medium"
            overlayContainerStyle={{ backgroundColor: 'white' }}
            icon={{ name: 'pagelines', color: 'green', type: 'font-awesome' }}
            activeOpacity={0.7}
            containerStyle={{ marginTop: 5, marginLeft: 20 }}
          />

          {Appointment.complited ? (
            <Image
              style={styles.successbutton}
              source={require('../assets/successbtn.png')}
            ></Image>
          ) : (
            <Image
              style={styles.successbutton}
              source={require('../assets/waitbtn.png')}
            ></Image>
          )}

          <Text style={styles.Crecord}>{Appointment.date}</Text>
          <Text style={styles.Trecord}>
            {Appointment.stringTime}~{Appointment.stringEndTime}
          </Text>
          {/* <Image
            style={styles.cancelbutton}
            source={require('../assets/remove.png')}
          ></Image> */}
        </View>
        <View style={styles.border}></View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.cancelbutton}
          source={require('../assets/remove.png')}
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
    width: 50,
    height: 15,
    marginTop: 15,
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
    fontSize: 10,
    marginLeft: 10,
  },
  CouncelrCard: {
    marginTop: 5,
  },
  Trecord: {
    marginLeft: 10,
    marginTop: 20,
    fontSize: 10,
  },
  cancelbutton: {
    width: 45,
    height: 15,
    marginTop: 20,
    marginLeft: 20,
  },
  box: {
    flexDirection: 'row',
    // position: 'absolute',
  },
});

import { Container } from 'native-base';
import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';

export default function DoctorDetailPage() {
  <HeaderComponent />;
  return (
    <Container>
      <HeaderComponent />
      <Image style={styles.Doctor} source={require('../assets/doctor.jpg')} />
      <Text style={styles.DoctorName}>강지희</Text>
      <Text style={styles.DoctorPart}>건강의학과,건강증진센터</Text>
      <Text style={styles.DoctorMajor}>복부영상의학·</Text>
      {/* <Text style={styles.Doctorprofile}>
        dr. Gilang is one of the best doctors in the Persahabatan Hospital. He
        has saved more than 1000 patients in the past 3 years. He has also
        received many awards from domestic and abroad as the best doctors. He is
        available on a private or schedule.
      </Text> */}
      <TouchableOpacity
        style={styles.Dialbtn}
        onPress={() => Linking.openURL(`tel:01051252908`)}
      >
        <Image style={styles.Dial} source={require('../assets/Dial.png')} />
      </TouchableOpacity>

      {/* <View>
        <Text>DoctorPage</Text>
      </View> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  Doctor: {
    width: 250,
    height: 200,
    left: 60,
    top: 60,
    borderRadius: 15,
  },
  DoctorName: {
    left: 130,
    top: 80,
  },
  DoctorPart: {
    left: 160,
    top: 107,
  },

  DoctorMajor: {
    left: 80,
    top: 90,
  },
  DoctorProfile: {
    left: 480,
    top: 450,
  },
  Dial: {
    width: 60,
    height: 60,
    left: 90,
    top: 150,
  },
});

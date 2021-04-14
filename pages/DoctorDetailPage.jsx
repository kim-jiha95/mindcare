import { Container, Footer, Button } from 'native-base';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Linking,
  Footer,
} from 'react-native';
import Loading from './Loading';
import HeaderComponent from '../components/HeaderComponent';
import { getDoctorDetail } from '../config/BackData';

export default function DoctorDetailPage({ navigation, route }) {
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
      <Text style={styles.DoctorName}>{DoctorDetail.name}</Text>
      <Text style={styles.DoctorPart}>{DoctorDetail.careers}</Text>
      <Text style={styles.DoctorMajor}>{DoctorDetail.specialties}</Text>

      <Footer>
        <TouchableOpacity
          style={styles.Dialbtn}
          onPress={() => Linking.openURL(`tel:01051252908`)}
        >
          <Image style={styles.Dial} source={require('../assets/Dial.png')} />
        </TouchableOpacity>
      </Footer>
    </Container>
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({
  DoctorImage: {
    width: 300,
    height: 300,
    left: 60,
    top: 60,
    borderRadius: 15,
    resizeMode: 'cover',
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
  Dialbtn: {
    borderWidth: 1,
  },
  Dial: {
    width: 60,
    height: 60,
    left: 90,
    top: 150,
  },
});

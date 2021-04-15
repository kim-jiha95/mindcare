import { Container, Footer, Button } from 'native-base';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';
import Loading from './Loading';
import HeaderComponent from '../components/HeaderComponent';
import { getDoctorDetail } from '../config/BackData';
import { ScrollView } from 'react-native-gesture-handler';
const diviceWidth = Dimensions.get('window').width;

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

      <ScrollView>
        <View style={styles.InfobBox}>
          <Text style={styles.DoctorName}>이름 : {DoctorDetail.name}</Text>
          <Text style={styles.DoctorMajor}>
            전문분야 : {DoctorDetail.specialties}
          </Text>
          <Text style={styles.DoctorPart}>{DoctorDetail.careers}</Text>
        </View>

        <Footer style={styles.footer}>
          <TouchableOpacity
            style={styles.Dialbtn}
            onPress={() => Linking.openURL(`tel:01051252908`)}
          >
            <Image style={styles.Dial} source={require('../assets/Dial.png')} />
            <Text>전화로 상담하기</Text>
          </TouchableOpacity>
        </Footer>
      </ScrollView>
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
  InfobBox: {
    marginTop: diviceWidth * 0.2,
    marginLeft: diviceWidth * 0.2,
    marginRight: diviceWidth * 0.2,
    alignSelf: 'center',
    alignContent: 'center',
  },
  DoctorName: { fontSize: 15 },
  DoctorMajor: { fontSize: 15 },
  DoctorPart: { fontSize: 15 },
  Dialbtn: {
    width: diviceWidth * 0.3,
    height: diviceWidth * 0.2,
    alignSelf: 'center',
    alignItems: 'center',
  },
  Dial: {
    width: 70,
    height: 60,
  },
  footer: {
    marginTop: diviceWidth * 0.45,

    borderTopWidth: 0,
    margin: 10,
    backgroundColor: 'white',
    borderBottomWidth: 0,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0,
  },
});

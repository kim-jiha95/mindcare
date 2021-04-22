import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function DoctorCard({ navigation, DoctorList }) {
  return (
    <TouchableOpacity
      style={styles.DoctorCard}
      onPress={() => navigation.navigate('DoctorDetailPage', DoctorList)}
    >
      {/* 상담사 사진 */}
      <Image source={{ uri: DoctorList.img }} style={styles.DoctorImage} />
      {/* 상담사 이름 */}
      <View style={styles.TextBox}>
        <Text style={styles.DoctorName}>{DoctorList.name}</Text>
        <Text style={styles.DoctorSpecialties}>
          <Text style={{ fontWeight: 'bold' }}>전문분야 :</Text>{' '}
          {DoctorList.specialties.join(', ')}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  DoctorCard: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginTop: 50,
    margin: 20,
    borderWidth: 2,
    borderColor: '#09C5F9',
    borderRadius: 15,
  },
  DoctorImage: {
    height: 160,
    width: 160,
    borderRadius: 240,
    resizeMode: 'cover',
  },
  TextBox: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  DoctorName: {
    fontSize: 30,
    paddingLeft: 30,
  },
  DoctorSpecialties: { paddingLeft: 30 },
});

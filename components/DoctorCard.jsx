import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

export default function DoctorCard({ DoctorList }) {
  return (
    <TouchableOpacity style={styles.DoctorCard}>
      {/* 상담사 사진 */}
      <Image source={{ uri: DoctorList.img }} style={styles.DoctorImage} />
      {/* 상담사 이름 */}
      <Text style={styles.DoctorName}>{DoctorList.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  DoctorCard: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    borderWidth: 0.1,
    borderRadius: 8,
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

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from 'react-native';
const diviceWidth = Dimensions.get('window').width;

export default function TestCard({ navigation, img, text, Link }) {
  return (
    <TouchableOpacity
      style={styles.TestCard}
      onPress={() => navigation.navigate('SurveyLinkPage', Link)}
    >
      <Image
        style={styles.TextImage}
        source={{
          uri: img,
        }}
      />
      <Text style={styles.TestText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  TestCard: {
    margin: 20,
    height: diviceWidth * 0.4,
    width: diviceWidth * 0.4,
    borderRadius: 10,
  },
  TextImage: {
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  TestText: {
    alignSelf: 'center',
  },
});

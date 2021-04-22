import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
const main = require('../assets/Main.png');
const diviceWidth = Dimensions.get('window').width;

export default function Loading() {
  return (
    <View style={styles.container}>
      <Image source={main} style={styles.Image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: diviceWidth * 1,
    resizeMode: 'contain',
  },
});

import React, { useState } from 'react';
import { Container } from 'native-base';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Avatar } from 'react-native-elements';
import CouncelDetailCard from '../components/CouncelDetailCard';

export default function MyDetailPage() {
  const [value, setValue] = useState(0);
  return (
    <Container>
      <View style={styles.container}>
        <Image style={styles.screen} source={require('../assets/Social.png')} />
        {/* <LiquidProgress
          backgroundColor={'black'}
          frontWaveColor={'blue'} 
          backWaveColor={'skyblue'}
          fill={value}
          size={150}
        > */}
        {/* <Animated.View style={styles.row}>
            <Text style={styles.text}>{(value * 100).toFixed(0)}%Done</Text>
          </Animated.View>
        </LiquidProgress>
        <View style={styles.buttonLayer}> */}
        {/* <TouchableOpacity
            style={styles.button}
            onPress={() => setValue(Math.random())}
          >
            <Text style={styles.buttonText}>Random</Text>
          </TouchableOpacity> */}
        {/* </View> */}
        {/* <Text style={styles.title}>Liquid Progress </Text> */}
        <StatusBar style="auto" />
      </View>
      <CouncelDetailCard />
    </Container>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: 350,
    height: 250,
    flex: 1.3,
    marginLeft: 5,
    marginTop: 45,
    // position: 'absolute',
  },
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#64FCD9',
    marginTop: 50,
  },
  row: {
    alignSelf: 'center',
    flexDirection: 'row',
    height: 70,
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 35,
  },
  buttonLayer: { flex: 0.25, flexDirection: 'row' },
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 30,
    elevation: 10,
  },
  buttonText: { fontSize: 15, color: 'white' },
  title: { fontSize: 40, flex: 0.5, color: 'gray' },
  border: {
    height: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 100,
    // marginLeft: 40,
    // position: 'absolute',
  },
  mycouncel1: {
    flex: 0.8,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#64FCD9',
    borderRadius: 15,
  },
  mycouncel2: {
    flex: 0.8,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#64FCD9',
    borderRadius: 15,
  },
  mycouncel3: {
    flex: 0.8,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#64FCD9',
    borderRadius: 15,
  },
  mycouncel4: {
    flex: 0.8,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#64FCD9',
    borderRadius: 15,
  },
  counecelname1: {
    fontSize: 20,
    marginTop: 15,
    // marginLeft: 5,
  },
  counecelcontent1: {
    fontSize: 120,
    marginTop: 55,
    // marginRight: 55,
  },
});

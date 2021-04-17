import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Header, Left, Icon, Right, Button } from 'native-base';

const logo = require('../assets/logo.png');

export default function HeaderComponent() {
  return (
    <Header style={styles.header} transparent>
      <View>
        <Text style={styles.HeaderText}>Mind Care</Text>
      </View>
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginVertical: 30,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  HeaderText: {
    fontSize: 30,
    margin: 30,
    textAlign: 'center',
    color: 'black',
  },
});

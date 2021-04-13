import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Header, Left, Icon, Right, Button } from 'native-base';

const logo = require('../assets/logo.png');

export default function HeaderComponent() {
  return (
    <Header style={styles.header} transparent>
      <Button transparent>
        <Image source={logo} style={styles.logoImage} />
      </Button>
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 5,
    // borderBottomWidth: 1.5,
    // borderBottomColor: '#EEE',
    justifyContent: 'center',
  },
  logoImage: {
    width: 100,
    resizeMode: 'contain',
  },
});

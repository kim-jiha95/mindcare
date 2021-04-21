import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Header, Left, Icon, Right, Button } from 'native-base';

const logo = require('../assets/logo.png');

import { logout } from '../config/BackData';

export default function HeaderComponent(navigation) {
  const goSignOut = () => {
    logout();
    navigation.navigate('SignInPage');
  };
  return (
    <Header style={styles.header} transparent>
      <View>
        <Image
          style={styles.logo}
          source={require('../assets/mlogo.png')}
        ></Image>
      </View>
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginVertical: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 100,
    // borderWidth: 150,
  },
  HeaderText: {
    fontSize: 30,
    margin: 30,
    textAlign: 'center',
    color: 'black',
  },
  logo: {
    width: 150,
    height: 85,
    // marginTop: 50,
    marginRight: 50,
  },
});

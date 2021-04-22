import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
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
    height: 130,
    borderBottomWidth: 0.1,
  },
  logo: {
    marginBottom: 10,
    flex: 1,
    resizeMode: 'contain',
    width: 150,
    height: 85,
  },
});

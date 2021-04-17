import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Header, Left, Icon, Right } from 'native-base';
import { Avatar } from 'react-native-elements';
import { Button, IconButton, Colors } from 'react-native-paper';

const logo = require('../assets/logo.png');

import { logout } from '../config/BackData';

export default function HeaderComponent(navigation) {
  const goSignOut = () => {
    logout();
    navigation.navigate('SignInPage');
  };
  return (
    <Header style={styles.header} transparent>
      <Button transparent>
        <Image source={logo} style={styles.logoImage} />
      </Button>
      <TouchableOpacity
        style={{ marginTop: 10, marginLeft: 100 }}
        onPress={goSignOut}
      >
        <IconButton icon="hard-hat" color={Colors.blue500} size={20} />
      </TouchableOpacity>
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 5,
    // borderBottomWidth: 1.5,
    // borderBottomColor: '#EEE',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoImage: {
    marginTop: Platform.OS === 'ios' ? 5 : 35,
    width: 100,
    resizeMode: 'contain',
  },
});

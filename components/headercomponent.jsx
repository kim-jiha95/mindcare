import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Image, Text, View } from 'react-native';
import { Header, Left, Icon, Right, Button } from 'native-base';
=======
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Header, Left, Icon, Right } from 'native-base';
import { Avatar } from 'react-native-elements';
import { Button, IconButton, Colors } from 'react-native-paper';
>>>>>>> dc725366a5710c793396ac6bcf3f5bd54bfb6a30

const logo = require('../assets/logo.png');

import { logout } from '../config/BackData';

export default function HeaderComponent(navigation) {
  const goSignOut = () => {
    logout();
    navigation.navigate('SignInPage');
  };
  return (
    <Header style={styles.header} transparent>
<<<<<<< HEAD
      <View>
        <Text style={styles.HeaderText}>Mind Care</Text>
      </View>
=======
      <Button transparent>
        <Image source={logo} style={styles.logoImage} />
      </Button>
      <TouchableOpacity
        style={{ marginTop: 10, marginLeft: 100 }}
        onPress={goSignOut}
      >
        <IconButton icon="hard-hat" color={Colors.blue500} size={20} />
      </TouchableOpacity>
>>>>>>> dc725366a5710c793396ac6bcf3f5bd54bfb6a30
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

import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Header, Left, Icon, Right, Button } from 'native-base';
import { SimpleLineIcons } from '@expo/vector-icons';

const diviceWidth = Dimensions.get('window').width;

const logo = require('../../assets/logo.png');

import { logout } from '../../config/BackData';

export default function HeaderComponentWithBack({ navigation }) {
  const goSignOut = () => {
    logout();
    navigation.navigate('SignInPage');
  };
  return (
    <Header style={styles.header} transparent>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <Image
          style={styles.logo}
          source={require('../../assets/mlogo.png')}
        ></Image>
        <TouchableOpacity
          onPress={() => goSignOut()}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginLeft: diviceWidth * 0.13,
    marginBottom: 10,
    flex: 1,
    resizeMode: 'contain',
    width: 150,
    height: 85,
  },
});

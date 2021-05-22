import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import ItemInput from '../../components/Login/ItemInput';
import { login } from '../../config/BackData';
import { Container, Content, Thumbnail, Text, Form, Button } from 'native-base';
import Load from '../../components/Load';
import AsyncStorage from '@react-native-async-storage/async-storage';

const bImage = require('../../assets/background.png');
const logo = require('../../assets/logo.png');

export default function SignInPage({ navigation }) {
  const [ready, setReady] = useState(false);

  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });

    setTimeout(() => {
      AsyncStorage.getItem('session', (err, result) => {
        if (result) {
          navigation.push('TabNavigator');
        } else {
          setReady(true);
        }
      });
      setReady(true);
    });
  }, []);

  const doSignIn = () => {
    if (username == '') {
      setEmailError('이메일을 입력해주세요');
    } else {
      setEmailError('');
    }

    if (password == '') {
      setPasswordError('비밀번호를 입력해주세요');
    } else {
      setPasswordError('');
    }
    login(username, password, navigation);
  };
  const setidFunc = (itemInputid) => {
    setusername(itemInputid);
  };
  const setPasswordFunc = (itemInputPassword) => {
    setPassword(itemInputPassword);
  };

  const goSignUp = () => {
    navigation.navigate('SignUpPage');
  };

  return ready ? (
    <Container style={styles.container}>
      <ImageBackground source={bImage} style={styles.backgroundImage}>
        <Content contentContainerStyle={styles.content} scrollEnabled={false}>
          <Thumbnail large source={logo} style={styles.thumbnail} />
          <Text style={styles.title}></Text>
          <Form style={styles.form}>
            <ItemInput
              title={'아이디'}
              type={'username'}
              setFunc={setidFunc}
              error={emailError}
            />
            <ItemInput
              title={'비밀번호'}
              type={'password'}
              setFunc={setPasswordFunc}
              error={passwordError}
            />
          </Form>

          <Button full style={styles.emailSignIn} onPress={doSignIn}>
            <Text style={{ color: '#333', fontsize: 8 }}>ID 로그인</Text>
          </Button>
          <Button full style={styles.emailSignUp} onPress={goSignUp}>
            <Text style={{ color: '#333', fontsize: 8 }}>회원가입</Text>
          </Button>
        </Content>
      </ImageBackground>
    </Container>
  ) : (
    <Load />
  );
}

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: { alignSelf: 'center' },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#c5beb6',
    textAlign: 'center',
  },
  highlite: {
    fontSize: 25,
    fontWeight: '700',
    color: '#df3f32',
    textAlign: 'center',
  },
  form: {
    width: 250,
    borderRadius: 10,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
  },
  label: {
    color: '#fff',
  },
  input: {
    color: '#fff',
  },
  emailSignIn: {
    alignSelf: 'center',
    width: 250,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#80ffe5',
  },
  emailSignUp: {
    alignSelf: 'center',
    width: 250,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#4dffdb',
  },
});

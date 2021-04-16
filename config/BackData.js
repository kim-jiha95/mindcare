import {
  Alert
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const host = 'http://15.165.205.40';

// doctorlist 받아오기 (DoctorPage)
export async function getDoctorList() {
  try {
    const result = await axios.get(host + '/api/doctors');
    return result.data.results;
  } catch (err) {
    Alert.alert('error :(');
  }
}

// doctorDetail 받아오기 (DoctorDetailpage)
export async function getDoctorDetail(id) {
  try {
    const result = await axios.get(host + '/api/doctors/' + id);
    return result.data.results;
  } catch (err) {
    Alert.alert('error :(');
  }
}

export async function register(
  username,
  password,
  // confirmPassword,
  phone,
  navigation
) {
  try {
    const result = await axios({
      method: 'post',
      url: host + '/api/signup',
      // header: await AsyncStorage.getItem('session'), JWT 토큰 헤더에 담는 방법
      data: {
        "username": username,
        "password": password,
        "phone": phone
      },
    });
    // if (result.data.msg == 'empty') {
    //   Alert.alert('비어있는 값이 있습니다!');
    // } else if (result.data.msg == 'not_match') {
    //   Alert.alert('비밀번호가 일치하지 않습니다!');
    // } else if (result.data.msg == 'exist_user') {
    //   Alert.alert('회원 정보가 이미 존재합니다!');
    // } else if (result.data.msg == 'error') {
    //   Alert.alert('무슨 문제가 있는 것 같아요!');
    // } else if (result.data.msg == 'success') {
    //   Alert.alert('회원가입 성공!');
    //   login(id, password, navigation);
    // }
  } catch (err) {
    Alert.alert('무슨 문제가 있는 것 같아요! => ');
  }
}

export async function login(username, password, navigation) {
  try {
    const result = await axios({
      method: 'post',
      url: host + '/login',
      data: {
        username: username,
        password: password,
      },
    });

    if (result.data.msg == 'success') {
      Alert.alert('로그인 성공!');
      console.log(result.data.token);
      await AsyncStorage.setItem('session', 'Bearer ' + result.data.token);
      navigation.push('TabNavigator');
    } else if (result.data.msg == 'fail') {
      Alert.alert('로그인에 실패했습니다.');
    }
  } catch (err) {
    Alert.alert('무슨 문제가 있는 것 같아요! => ', err.message);
  }
}

export async function logout() {
  try {
    console.log('로그아웃을 시도합니다..');
    console.log(AsyncStorage);
    AsyncStorage.clear();
    Alert.alert('로그인페이지로 돌아갑니다.');
  } catch (err) {
    Alert.alert('돌아와 ', err.message);
  }
}
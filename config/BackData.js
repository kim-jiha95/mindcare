import {
  Alert
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const host = 'http://15.165.205.40';

// 회원가입
export async function register(username, password, phone, navigation) {
  try {
    const result = await axios({
      method: 'post',
      url: host + '/api/signup',
      // header: await AsyncStorage.getItem('session'), JWT 토큰 헤더에 담는 방법
      data: {
        username: username,
        password: password,
        phone: phone,
      },
    });
  } catch (err) {
    Alert.alert('무슨 문제가 있는 것 같아요! => ');
  }
}

// 로그인
export async function login(username, password, navigation) {
  try {
    const result = await axios({
      method: 'post',
      url: host + '/api/login',
      data: {
        username: username,
        password: password,
      },
    });

    if (result.data.ok == true) {
      Alert.alert(result.data.msg);
      await AsyncStorage.setItem('session', result.data.token);
      navigation.push('TabNavigator');
      // issue
    } else if (result.data.ok == false) {
      Alert.alert(result.data.msg);
    }
  } catch (err) {
    Alert.alert('무슨 문제가 있는 것 같아요! => ', err.message);
  }
}

// 로그아웃
export async function logout() {
  try {
    AsyncStorage.clear();
    Alert.alert('로그인페이지로 돌아갑니다.');
  } catch (err) {
    Alert.alert('돌아와 ', err.message);
  }
}

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
    return result.data.doctor;
  } catch (err) {
    Alert.alert('error :(');
  }
}

// 해당 날짜의 상담가능 시간 받아오기
export async function getReservationTime(date, id) {
  try {
    let token = await AsyncStorage.getItem('session');

    //datepicker의 시간출력값 관리(원하는string값으로 변환)
    let now = JSON.stringify(date).split('T')[0].split('"')[1];

    const result = await axios({
      method: 'post',
      url: host + `/api/appointments/${id}/date`,
      data: {
        date: now,
      },
      headers: {
        'X-AUTH-TOKEN': token,
      },
    });

    if (result.data.ok == true) {} else if (result.data.ok == false) {
      Alert.alert(result.data.msg);
    }
    return result.data;
  } catch (err) {
    Alert.alert('무슨 문제가 있는 것 같아요! => ', err.message);
  }
}

// 예약하기
export async function doReservation(id, date, time, navigation) {
  try {
    let token = await AsyncStorage.getItem('session');
    let now = JSON.stringify(date).split('T')[0].split('"')[1];

    const result = await axios({
      method: 'post',
      url: host + `/api/appointments/${id}`,
      data: {
        date: now,
        time: time,
      },
      headers: {
        'X-AUTH-TOKEN': token,
      },
    });
    Alert.alert(result.data.msg);
    navigation.push('TabNavigator');
  } catch (err) {
    Alert.alert('무슨 문제가 있는 것 같아요! => ', err.message);
  }
}

// 예약목록받아오기
export async function getAppointment() {
  try {
    let token = await AsyncStorage.getItem('session');
    const result = await axios({
      method: 'get',
      url: host + '/api/appointments',
      headers: {
        'X-AUTH-TOKEN': token,
      },
    });

    return result.data.results;
  } catch (err) {
    Alert.alert('error :(');
  }
}
import { Alert } from 'react-native';
import axios from 'axios';

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
    console.log(result.data.results);
    return result.data.results;
  } catch (err) {
    Alert.alert('error :(');
  }
}

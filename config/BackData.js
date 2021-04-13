import axios from 'axios';

const host = 'http://15.165.205.40'

// doctorlist 받아오기
export async function getDoctorList() {
    try {
        const result = await axios.get(host + '/api/doctors');
        // console.log(result.data.results)
        return result.data.results

    } catch (err) {
        Alert.alert('카테고리를 불러올 수 없습니다 :(');
    }
}
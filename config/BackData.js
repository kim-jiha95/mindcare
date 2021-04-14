import axios from 'axios';

const host = 'http://15.165.205.40';

export async function getDoctorList() {
  const result = await axios({
    method: 'get',
    url: 'http://15.165.205.40/api/doctors',
    //    headers: {
    // 	  authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDZiMDZhMDA2NjhlZTkzMjZmNGY0YzUiLCJpYXQiOjE2MTc2MjY4MDB9.FGc6aCdych26nSPrwFr1oei75iTA0weI8OFaIgvjY78'
    //    }
  });
  console.log(result.data.results);
  return result.data.results;
}

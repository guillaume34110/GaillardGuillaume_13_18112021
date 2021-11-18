
import axios from 'axios' //https://github.com/axios/axios
const loginUrl = 'http://localhost:3001/api/v1/user/login'

export const apiLogin = (email,password) => {
  return axios.post(loginUrl, {
        email: email,
        password: password
      })
      .then(function (response) {
        console.log(response,"ok");
        return response
      })
      .catch(function (error) {
        console.log(error,'error');
        return error
      });
} 

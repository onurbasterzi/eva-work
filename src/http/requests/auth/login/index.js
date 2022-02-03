import axios from '../../../axios/index.js'
import router from '@/router'
import authConfig from '../../../../../auth_config.json'

export default {
  init () {
 
  },
  login (email, pwd) {
    return axios.post(`${authConfig.apiDomain}/user/auth`, {
      email,
      password: pwd
    })
  },
  refreshToken () {
    if(localStorage.getItem('accessToken')){
      return `${localStorage.getItem('accessToken')}`;
    }
    else{
      router.push('/');
    }
  }

}

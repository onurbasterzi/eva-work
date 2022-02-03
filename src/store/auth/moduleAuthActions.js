/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import login from '../../http/requests/auth/login/index.js'
import router from '@/router'

export default {
  
    authLogin ({commit}, payload) {
    return new Promise((resolve, reject) => {
      login.login(payload.userDetails.email, payload.userDetails.password)
        .then(response => {

          if (response.data.ApiStatusCode===200) {
            router.push(router.currentRoute.query.to || '/charts')

            localStorage.setItem('accessToken', response.data.Data.token)
            commit('SET_BEARER', response.data.Data.token)

            resolve(response)
          } else {
            reject({message: 'Wrong Email or Password'})
          }

        })
        .catch(error => { reject(error) })
    })
  },

  logOut ({commit}) {
    return new Promise((resolve) => {
      localStorage.removeItem('accessToken')
      commit('SET_BEARER', "")
      resolve()
    })
  },
 
  fetchAccessToken ({commit}) {
    return new Promise((resolve) => {
      commit('SET_BEARER', login.refreshToken())
      resolve(login.refreshToken())
    })
  }
}

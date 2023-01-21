import axios from 'axios';
import jwt_decode from 'jwt-decode'

export async function signup (name, email, password){
  const response = await axios.post('api/auth/signup',{
   name, email, password
  })
  console.log(response.data)
  return response.data
}

export async function login(email,password){
  const response = await axios.post('api/auth/login',{
    email, password
  })
  localStorage.setItem('accessToken', response.data.accessToken)
  localStorage.setItem('refreshToken', response.data.refreshToken)
  console.log(response.data)
  return response.data
}

export function logout() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  }

export function getAccessToken() {
  return localStorage.getItem('accessToken');
  }
  
  export function getRefreshToken() {
  return localStorage.getItem('refreshToken');
  }

  export function isAuthenticated(){
    const accessToken = getAccessToken()
    if(!accessToken){
      return false
    }
    try {
      const {exp} = jwt_decode(accessToken)
      if(exp<Date.now()/1000){return false}
    } catch (error) {
      return false
    }
    return true
  }

  export async function refreshToken(refreshToken){
    try {
      const response = await axios.post('api/auth/refresh',{
        refreshToken : refreshToken
      })
      return response.data.accessToken
    } catch (error) {
      console.log(error.response.data.message)
    }
  }
import { useEffect, useState } from "react";
import {getAccessToken,getRefreshToken, refreshToken,isAuthenticated, login, logout} from './auth'

export default function Login () {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isAuth, setIsAuth] = useState(isAuthenticated())

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await login(email,password)
      setIsAuth(true)
    } catch (error) {
      setError(error.response.data.message)
    }
  }
useEffect(() => {
  refreshTokenIfExpired()
  console.log(getAccessToken())
  console.log(getRefreshToken())
}, [])

useEffect(() => {
  setIsAuth(isAuthenticated())
}, [isAuth])


async function refreshTokenIfExpired() {
  if (!getRefreshToken()) return
  if(!isAuthenticated()){
  try {
      const newAccessToken = await refreshToken(getRefreshToken())
      localStorage.setItem('accessToken', newAccessToken)
      setIsAuth(true)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }}

  function handleLogout() {
    logout()
    setIsAuth(false)
  }


  if (isAuthenticated()){
    return (<>
    <h1>Already logged in</h1>
    <button onClick={handleLogout}>Logout</button>
    </>)
  }

  return( 
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
      </form>
  )
}
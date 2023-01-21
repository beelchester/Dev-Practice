import { useState } from "react";
import {signup} from './auth'

export default function Signup () {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await signup(name,email,password)
    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
    }
  }

  return( 
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="name" />
      <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
      <button type="submit">Signup</button>
      {error && <p>{error}</p>}
      </form>
  )
}
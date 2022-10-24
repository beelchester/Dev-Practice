import React from 'react'
import { useParams } from 'react-router-dom'

const Feedback = () => {
  const {id} = useParams() //! will return whatever was placed in place of id in url
  return (
    <div>Feedback {id}</div>
  )
}

export default Feedback
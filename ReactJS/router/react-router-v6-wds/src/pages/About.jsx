import React from 'react'
import {Link} from "react-router-dom"
const About = () => {
  return (
    <div>About
      <Link to={'/about/1'}>Feedback 1</Link>
      <Link to={'/about/2'}>Feedback 2</Link>
    </div>
  )
}

export default About
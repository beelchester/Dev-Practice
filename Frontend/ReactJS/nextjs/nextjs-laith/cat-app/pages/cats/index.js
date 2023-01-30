// To create a page simply create a file in pages folder and a link localhost.../cats will redirect to it
// Another and better way to do the same thing is to create a folder named cats containing index.js

import React from 'react'
import Nav from '../../components/Nav/Nav'


const cats = () => {
  return (
  <div>
    <Nav/>
    <h1>Cats</h1>
    
  </div>
  )
}

export default cats
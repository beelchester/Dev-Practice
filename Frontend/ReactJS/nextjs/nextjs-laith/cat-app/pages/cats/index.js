// To create a page simply create a file in pages folder and a link localhost.../cats will redirect to it
// Another and better way to do the same thing is to create a folder named cats containing index.js

import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav'
import Card from '../../components/Card/Card'
import DefaultLayout from '../../layouts/DefaultLayout'
import Head from 'next/head'


const index = () => {
const [cats, setCats] = useState([])

const fetchCats = async () => {
  const res = await fetch ('/api/cats')
  const data = await res.json()
  setCats(data)
}

useEffect(() => {
  fetchCats()
}, [])

  return (
  <div>
    <Head>
      <title>Cats</title>
    </Head>
    
    <DefaultLayout>
      
    <h1>Cats</h1>
    {cats.map((cat) => (
      <Card key={cat.id} 
      id = {cat.id}
      name = {cat.name}
      image = {cat.image.url}
      phone = {cat.phone}
      email = {cat.email}
      />
      ))}
    </DefaultLayout>
    
  </div>
  )
}

export default index
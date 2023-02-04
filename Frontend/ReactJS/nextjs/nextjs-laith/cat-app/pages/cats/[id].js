import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'

function Cat() {
  const router = useRouter()
  const {id} = router.query

  const [cat, setCat] = useState({})

  const fetchCat = async () => {
    const res = await fetch(`/api/cats/${id}`)
    const data = await res.json()
    setCat(data)
  }
  
  useEffect(() => {
    fetchCat()
  }, [])

  return (
<div>

    <Head>
      <title>{cat.name}</title>
    </Head>

    <DefaultLayout>
    <div style={{display:'flex', gap:'20px', marginTop:"50px"}}>
      <img src={cat.image?.url} alt="cat"  style={{maxWidth:"500px", maxHeight:"650px"}} />
      <div>
      <h1>{cat.name}</h1>
      <p>{cat.phone}</p>
      <p>{cat.email}</p>
      <p>{cat.description}</p>
      </div>
    </div>
    </DefaultLayout>
  </div>
  )
}

export default Cat
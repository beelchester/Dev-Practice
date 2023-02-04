import React from 'react'
import { useRouter } from 'next/router' //another way to navigate to a page

const Jumbotron = () => {
  const router = useRouter()

  return (
    <div><div class="jumbotron jumbotron-fluid">
    <div class="container mt-5">
      <h1 class="display-4">Cats</h1>
      <p class="lead">Come adopt lovely cats.</p>
      <button type="button" class="btn btn-primary" onClick={()=>router.push("/cats")}>Start Looking</button>

    </div>
  </div></div>
  )
}

export default Jumbotron
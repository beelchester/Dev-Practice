"use client" // this declares that this code is to be run in the browser on the client

// this is a component that is used to display an error message

export default function Error({error,reset}) {
  return (
    <div>
      <h1>This isnt loading {error.message}</h1>
      <button onClick={()=> reset()}>Reset</button>
    </div>
  )
}

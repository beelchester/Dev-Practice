import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TourCard from './components/TourCard'
import { Container, Grid } from '@mui/material'
import Todo from './components/Todo'
function App() {

  return (
    <div className="App">
      {/* <Container>
      <Grid container  spacing={5}>
      <TourCard/>
      <TourCard/>
      <TourCard/>
      <TourCard/>
      <TourCard/>
      <TourCard/>
      </Grid>
      </Container> */}
      <Todo/>
    </div>
  )
}

export default App


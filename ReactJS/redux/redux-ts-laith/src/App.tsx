import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { bindActionCreators } from 'redux'
import { actionCreators , State} from './state'
const App = () => {

  const dispatch = useDispatch() //to get all action creators
  const {depositMoney, withdrawMoney, bankrupt} = bindActionCreators(actionCreators,dispatch) // to bind all action creators... destructure them
  const amount = useSelector((state:State) => state.bank) //to get the current state
  return (
    <>
    <h1>{amount}</h1>
    <button onClick={()=>depositMoney(1000)}>Deposit</button>
    <button onClick={()=>withdrawMoney(1000)}>Withdraw</button>
    <button onClick={()=>bankrupt()}>Bankrupt</button>
    </>
  )
}

export default App
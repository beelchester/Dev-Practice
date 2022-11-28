import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/reservationSlice'

interface props {
  name: string
  number: number
}

const ReservationCard = ({name, number}:props) => {
  const dispatch = useDispatch()
  return (
    <div onClick={()=>dispatch(removeReservation(number))} className="reservation-card-container">{name}</div>

  )
}

export default ReservationCard
import {configureStore} from "@reduxjs/toolkit"
import reservationsReducer from "../features/reservationSlice"
export const store = configureStore({
  reducer:{
    reservation:reservationsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
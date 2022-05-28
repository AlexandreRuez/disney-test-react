import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface HotelState {
  startDate: string,
  endDate: string,
}

const initialState: HotelState = {
  startDate: "dd / mm / yyyy",
  endDate: "dd / mm / yyyy",
}

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    setStartDate: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<string>) => {
      state.endDate = action.payload;
    }
  }
})


export const { setStartDate, setEndDate } = hotelSlice.actions
export const selectHotel = (state: RootState) => state.hotel
export default hotelSlice.reducer
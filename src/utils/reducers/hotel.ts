import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Problème Type Date non-serializable value
interface HotelState {
  hotelSelected: Hotel,
  startDate: Date,
  endDate: Date,
}

const initialState: HotelState = {
  hotelSelected: null,
  startDate: null,
  endDate: null,
}

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    setStartDate: (state, action: PayloadAction<Date>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<Date>) => {
      state.endDate = action.payload;
    },
    setHotelSelected: (state, action: PayloadAction<Hotel>) => {
      state.hotelSelected = action.payload;
    }
  }
})


export const { setStartDate, setEndDate, setHotelSelected } = hotelSlice.actions
export const selectHotel = (state: RootState) => state.hotel
export default hotelSlice.reducer
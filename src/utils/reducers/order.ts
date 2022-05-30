import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Problème Type Date non-serializable value
interface OrderState {
  hotelSelected: Hotel,
  optionsSelected: Array<optionsSelected>,
  dates: {
    start: Date,
    end: Date,
    error: boolean
  }
}

const initialState: OrderState = {
  hotelSelected: null,
  optionsSelected: [],
  dates: {
    start: null,
    end: null,
    error: false
  }
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setStartDate: (state, action: PayloadAction<Date>) => {
      state.dates.start = action.payload;
    },
    setEndDate: (state, action: PayloadAction<Date>) => {
      state.dates.end = action.payload;
    },
    setDateError: (state) => {
      state.dates.error = true;
    },
    unsetDateError: (state) => {
      state.dates.error = false;
    },
    setHotelSelected: (state, action: PayloadAction<Hotel>) => {
      state.hotelSelected = action.payload;
    },
    setOptions: (state, action: PayloadAction<Array<optionsSelected>>) => {
      state.optionsSelected = action.payload;
    }

  }
})


export const { setStartDate, setEndDate, setDateError, unsetDateError, setHotelSelected, setOptions } = orderSlice.actions
export const selectHotel = (state: RootState) => state.order
export default orderSlice.reducer
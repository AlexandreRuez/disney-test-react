import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Problème Type Date non-serializable value
interface OrderState {
  user: User,
  hotelSelected: Hotel,
  optionsSelected: Array<optionsSelected>,
  dates: {
    start: Date,
    end: Date,
    error: boolean
  },
  guards: {
    options: boolean,
    form: boolean
  }
}

const initialState: OrderState = {
  user: {
    id: 0,
    mail: "",
    phone:"",
    title: "",
    firstName: "",
    lastName: "",
    adressLine1: "",
    adressLine2: "",
    postcode: "",
    city: "",
    country: "",
  },
  hotelSelected: null,
  optionsSelected: [],
  dates: {
    start: null,
    end: null,
    error: false
  },
  guards : {
    options: true,
    form: false
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
    unlockOptionGuard: (state) => {
      state.guards.options = true;
    },
    unlockFormGuard: (state) => {
      state.guards.form = true;
    },
    setHotelSelected: (state, action: PayloadAction<Hotel>) => {
      state.hotelSelected = action.payload;
    },
    setOptions: (state, action: PayloadAction<Array<optionsSelected>>) => {
      state.optionsSelected = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      console.log(state.user)
    }

  }
})


export const { setStartDate, setEndDate, setDateError, unsetDateError, setHotelSelected, setOptions, setUser,unlockOptionGuard ,unlockFormGuard } = orderSlice.actions
export const selectHotel = (state: RootState) => state.order
export default orderSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const hotelSlice = createSlice({
  name: 'hotel',
  initialState: {
      startDate: "date",
      endDate: "date"
  },
  reducers: {
    setDate: (state, action) => {
      return action.payload;
    },
  }
})


// on extrait les actions et le reducer
const { actions, reducer } = hotelSlice
// on export chaque action individuellement
export const { setDate } = actions
// on export le reducer comme default export
export default reducer
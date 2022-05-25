import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './reducers/hotel'

export default configureStore({
  reducer: {
    hotel: hotelReducer
  }
})
// Can still subscribe to the store
//store.subscribe(() => console.log(store.getState()))
import { configureStore } from '@reduxjs/toolkit'
import orderReducer from './reducers/order'

export const store = configureStore({
  reducer: {
    order: orderReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['order/setStartDate', 'order/setEndDate'],
        ignoredPaths: ['order.dates'],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store; 
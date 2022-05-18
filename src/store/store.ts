import { configureStore } from '@reduxjs/toolkit'
import meetupReducer from './meetup/meetupSlice'
import userReducer from './user/userSlice'

export const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
      meetups: meetupReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })


export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

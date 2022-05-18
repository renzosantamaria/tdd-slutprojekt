import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMeetup } from './meetup.types'

export interface MeetupState {
  currentMeetups: IMeetup[]
  pastMeetups: IMeetup[]
}

const initialState: MeetupState = {
  currentMeetups: [],
  pastMeetups: [],
}

export const meetupSlice = createSlice({
  name: 'meetup',
  initialState,
  reducers: {
    getCurrentMeetups: (state, action: PayloadAction<IMeetup[]>) => {
      state.currentMeetups = [...action.payload]
    },
    getPastMeetups: (state, action: PayloadAction<IMeetup[]>) => {
      state.pastMeetups = [...action.payload]
    },
    reset: () => {
      return initialState
    },
  },
})

export const { getCurrentMeetups, getPastMeetups, reset } = meetupSlice.actions

export default meetupSlice.reducer

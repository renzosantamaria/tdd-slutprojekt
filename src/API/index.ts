import {meetups} from '../data'
import {users} from '../data'
import { IComment } from '../store/meetup/meetup.types'
import { IUser } from '../store/user/user.types'

export const getAllUpcomingMeetups = (currentDate: Date) => {
    let now = currentDate.getTime()
  
    const comingMeetups = meetups.filter(meetup => meetup.startDate.getTime() > now)
    return comingMeetups.slice().sort((a, b) => +a.startDate - +b.startDate)
}
export const getAllPastMeetups = (currentDate: Date) => {
  let now = currentDate.getTime()

  const pastMeetups = meetups.filter(meetup => meetup.startDate.getTime() < now)
  return pastMeetups.slice().sort((a, b) => +b.startDate - +a.startDate)
}
export const getMeetupById = (id: number) => {
  return meetups.find(meetup => meetup.id === id)
}
export const authenticateUser = (email: string, password: string): IUser | undefined => {
  const user = users.find(user => user.email === email)

  return user && user.password === password
    ? { id: user.id, name: user.name, email: user.email, attendingMeetupsIds: user.attendingMeetupsIds, hostingMeetupsIds: user.hostingMeetupsIds }
    : undefined
}
export const updateMeetupAttendeeList = (id: number, attendeeName: string) => {
  let meetupIndex = meetups.findIndex(meetup => meetup.id === id)
  let meetup = meetups.find(meetup => meetup.id === id)

  if (meetup) {
    let newMeetup = { ...meetup }
    newMeetup.attendees = [...newMeetup.attendees, attendeeName]
    meetups[meetupIndex] = newMeetup
    return newMeetup
  } else {
    return undefined
  }
}
export const updateUserAttendingMeetupsIds = (userId: number, meetupId: number) => {
  const userIndex = users.findIndex(user => user.id === userId)
  const user = users.find(user => user.id === userId)

  if (user) {
    const updatedUser = { ...user }
    updatedUser.attendingMeetupsIds = [...updatedUser.attendingMeetupsIds, meetupId]
    users[userIndex] = updatedUser
    return updatedUser
  } else {
    return undefined
  }
}
export const updateCommentsList = (id: number, comment: IComment) => {
  let meetupIndex = meetups.findIndex(meetup => meetup.id === id)
  let meetup = meetups.find(meetup => meetup.id === id)

  if (meetup) {
    let newMeetup = { ...meetup }
    newMeetup.comments = [...newMeetup.comments, comment]
    meetups[meetupIndex] = newMeetup
    return newMeetup
  } else {
    return undefined
  }
}
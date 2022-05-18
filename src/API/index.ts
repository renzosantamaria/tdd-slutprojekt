import meetups from '../data'

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
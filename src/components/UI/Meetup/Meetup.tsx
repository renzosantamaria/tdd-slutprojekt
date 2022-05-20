import { FC } from "react"
import { IMeetup } from '../../../store/meetup/meetup.types'
import { Link } from 'react-router-dom'
import classes from './Meetup.module.css'

interface Props {
  meetup: IMeetup
  testId: string
  pastMeetup?: boolean
}

const Meetup: FC<Props> = (props) => {
    const { meetup, testId, pastMeetup } = props
    const startTime = `${meetup.startDate.toDateString()} ${meetup.startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}`
    const endTime = `${meetup.endDate.toDateString()} ${meetup.endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}`
    return (
      <Link to={`/meetups/${meetup.id}`} state={{pastMeetup}}>
        <div className={classes.meetupCard}>
          <h3 className={classes.meetupHeading}>{meetup.title}</h3>
          <div className={classes.meetup} role="listitem" data-testid={testId} >
            <p>Start: {startTime}</p>
            <p>End: {endTime}</p>
            <p>Address: {meetup.address}</p>
          </div>
        </div>
      </Link>
    )
}

export default Meetup
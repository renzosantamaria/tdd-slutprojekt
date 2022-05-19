import { FC } from "react"
import { IMeetup } from '../../../store/meetup/meetup.types'
import { Link } from 'react-router-dom'

interface Props {
  meetup: IMeetup
  testId: string
  pastMeetup?: boolean
}

const Meetup: FC<Props> = (props) => {
    const { meetup, testId, pastMeetup } = props
    return (
        <Link to={`/meetups/${meetup.id}`} state={{pastMeetup}} >
      <div role="listitem" data-testid={testId} >
        <h3>
          {meetup.title}
        </h3>

        <p>
          <strong>Start: </strong>
          {meetup.startDate.toDateString()} {meetup.startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
        </p>
        <p></p>
        <p>
          <strong>End: </strong>
          {meetup.endDate.toDateString()} {meetup.endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
        </p>
        <p>
          <strong>Address: </strong>
          {meetup.address}
        </p>
      </div>
    </Link>
    )
}

export default Meetup
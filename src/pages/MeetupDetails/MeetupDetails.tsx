import { FC, useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { getMeetupById } from "../../API"
import { IMeetup } from "../../store/meetup/meetup.types"

interface CustomLocationState {
    pastMeetup: boolean
}

const MeetupDetails: FC = () => {
    const {id} = useParams()
    const [meetup, setMeetup] = useState<IMeetup>()
    const [meetupExist, setMeetupExists] = useState<boolean>(false)
    const location = useLocation()
    const state = location.state as CustomLocationState
    const past = state&&state.pastMeetup || undefined

    useEffect(() => {
        const currentMeetup = getMeetupById(+id!)
        currentMeetup ? setMeetup(currentMeetup) : setMeetupExists(false)
        
    }, [])

    return (
        <main>
            {meetup ? 
            <>
                <h1>{meetup?.title}</h1>
                <div>
                    <p>Hosted by: {meetup.hostName}</p>
                    <p>Description: {meetup.description}</p>
                    <p>
                        Starts:
                        {meetup.startDate.toDateString()}{' '}
                        {meetup.startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
                    </p>
                    <p>
                        Ends:
                        {meetup.endDate.toDateString()}{' '}
                        {meetup.endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
                    </p>
                    <p>Address: {meetup.address}</p>
                    {meetup.attendees.length> 0 ?
                    <p>Attendees: {meetup.attendees.join(',  ')}.</p>
                    :   
                    ''
                    }
                </div>
            </>
            :
            !meetupExist && <p>Nothing to see here</p>
            }
        </main>
    )
}

export default MeetupDetails
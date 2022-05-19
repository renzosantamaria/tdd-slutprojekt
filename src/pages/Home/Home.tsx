import { FC, useEffect } from "react"
import Meetup from "../../components/UI/Meetup/Meetup"
import { getAllUpcomingMeetups, getAllPastMeetups } from '../../API'
import { getCurrentMeetups, getPastMeetups } from "../../store/meetup/meetupSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"

const Home: FC = () => {
    const dispatch = useDispatch()
    const currentMeetups = useSelector((state: RootState) => state.meetups.currentMeetups)
    const pastMeetups = useSelector((state: RootState) => state.meetups.pastMeetups)

    useEffect(() => {
        const currentMeetups = getAllUpcomingMeetups(new Date())
        dispatch(getCurrentMeetups(currentMeetups))
        const pastMeetups = getAllPastMeetups(new Date())
        dispatch(getPastMeetups(pastMeetups))
    }, [dispatch])

    return (
        <main>
            <section>
                <h2>Upcoming meetups</h2>
                {currentMeetups.length > 0 ? 
                    <ul>
                        {currentMeetups!.map(meetup => (
                            <Meetup meetup={meetup} testId={'upcomingMeetup'} key={meetup.id} pastMeetup={false} />
                        ))}
                    </ul>
                    :
                    <p>No upcoming meetups to show</p>
                }
            </section>
            <section>
                <h2>Past meetups</h2>
                {pastMeetups.length > 0 ? 
                    <ul>
                        {pastMeetups!.map(meetup => (
                            <Meetup meetup={meetup} testId={'pastMeetup'} key={meetup.id} pastMeetup={true} />
                        ))}
                    </ul>
                    :
                    <p>No past meetups to show</p>
                }
            </section>
        </main>
    )
}

export default Home
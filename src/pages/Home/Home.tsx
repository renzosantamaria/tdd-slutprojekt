import { FC, useEffect } from "react"
import Meetup from "../../components/UI/Meetup/Meetup"
import { getAllUpcomingMeetups, getAllPastMeetups } from '../../API'
import { getCurrentMeetups, getPastMeetups } from "../../store/meetup/meetupSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import classes from './Home.module.css'

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
            <div className={classes.flexContainer}>
                <section className={classes.meetupWrapper}>
                    <h2 className={classes.meetupHeading}>Upcoming meetups</h2>
                    {currentMeetups.length > 0 ? 
                        <ul className={classes.meetupList}>
                            {currentMeetups!.map(meetup => (
                                <Meetup meetup={meetup} testId={'upcomingMeetup'} key={meetup.id} pastMeetup={false} />
                            ))}
                        </ul>
                        :
                        <p>No upcoming meetups to show</p>
                    }
                </section>
                <section className={classes.meetupWrapper}>
                    <h2 className={classes.meetupHeading}>Past meetups</h2>
                    {pastMeetups.length > 0 ? 
                        <ul className={classes.meetupList}>
                            {pastMeetups!.map(meetup => (
                                <Meetup meetup={meetup} testId={'pastMeetup'} key={meetup.id} pastMeetup={true} />
                            ))}
                        </ul>
                        :
                        <p>No past meetups to show</p>
                    }
                </section>
            </div>
        </main>
    )
}

export default Home
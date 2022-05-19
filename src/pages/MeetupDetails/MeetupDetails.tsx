import { FC, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { getMeetupById, updateCommentsList, updateMeetupAttendeeList, updateUserAttendingMeetupsIds } from "../../API"
import { IComment, IMeetup } from "../../store/meetup/meetup.types"
import Comment from "../../components/UI/Comment/Comment"
import { RootState } from "../../store/store"
import { updateUser } from "../../store/user/userSlice"

interface CustomLocationState {
    pastMeetup: boolean
}

const MeetupDetails: FC = () => {
    const user = useSelector((state: RootState) => state.user.user)
    const {id} = useParams()
    const dispatch = useDispatch()
    
    const [meetup, setMeetup] = useState<IMeetup>()
    const [meetupExist, setMeetupExists] = useState<boolean>(false)
    const [isUserAllowedToJoin, setIsUserAllowedToJoin] = useState<boolean>(false)
    const [cantJoinMessage, setCantJoinMessage] = useState<string>('')
    const [orderedComments, setOrderedComments] = useState<IComment[]>([])
    const [newComment, setNewComment] = useState<string>('')
    const location = useLocation()
    const state = location.state as CustomLocationState
    const past = state&&state.pastMeetup || undefined

    useEffect(() => {
        const currentMeetup = getMeetupById(+id!)
        currentMeetup ? setMeetup(currentMeetup) : setMeetupExists(false)
        !user && setCantJoinMessage('log in to register!')
    }, [])

    useEffect(() => {
        let userIsAlreadyRegistered = false
        user?.attendingMeetupsIds.map(attendingMeetupsId => {
            if (attendingMeetupsId == +id!) {
                userIsAlreadyRegistered = true
            }
        })
        if(userIsAlreadyRegistered) {
            setIsUserAllowedToJoin(false)
            setCantJoinMessage('You are already registered!')
        }else {
            setIsUserAllowedToJoin(true)
        }
    }, [user])

    useEffect(() => {
        if (meetup) {
            const orderedComments = meetup.comments.slice().sort((a, b) => +a.date - +b.date)
            setOrderedComments(orderedComments)
        }
    }, [meetup])

    const handleAddAttendee = () => {
        const updatedMeetup = updateMeetupAttendeeList(+id!, user!.name)
        const updatedUser = updateUserAttendingMeetupsIds(user!.id, meetup!.id)
        updatedMeetup && setMeetup({ ...updatedMeetup }) 
        updatedUser && dispatch(updateUser(updatedUser)) 
    }

    const handleAddComment = (e: React.FormEvent) => {
        e.preventDefault()
        const updatedMeetup = updateCommentsList(+id!, { name: user!.name, date: new Date(), content: newComment })
        if (updatedMeetup) {
          setMeetup({ ...updatedMeetup })
          setNewComment('')
        }
    }

    return (
        <main>
            {meetup ? 
            <>
                <section>
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
                </section>
                <section>
                    {isUserAllowedToJoin && user && <button onClick={handleAddAttendee}>Attend</button>}
                    {(!user || !isUserAllowedToJoin )&& <p>{cantJoinMessage}</p>}
                </section>
                <section>
                    <h2>Comments</h2>
                    {orderedComments.length === 0 && <p>Be the first to leave a comment</p>}
                    {orderedComments && orderedComments.map((comment, index) => <Comment key={`${comment.name}${index}`} comment={comment} />)}
                    {user && (
                    <form onSubmit={e => handleAddComment(e)}>
                        <label htmlFor="comments">Add a comment</label>
                        <textarea
                            name="comments"
                            id="comments"
                            cols={30}
                            rows={5}
                            value={newComment}
                            onChange={e => setNewComment(e.target.value)}
                        ></textarea>
                        <button>Add</button>
                    </form>
                    )}
                    {!user && <p>Log in to leave a comment</p>}
                </section>
            </>
            :
            !meetupExist && <p>Nothing to see here</p>
            }
        </main>
    )
}

export default MeetupDetails
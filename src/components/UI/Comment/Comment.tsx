import { FC } from "react"
import { IComment } from '../../../store/meetup/meetup.types'

interface Props {
  comment: IComment
}

const Comment: FC<Props> = (props) => {
    const { comment } = props
    return (
        <article>
            <div>               
                <p data-testid="commenters-name">{comment.name}</p>
                <p>{comment.date.toLocaleDateString()}</p>
                <p>{comment.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
            </div>
            <p>{comment.content}</p>
        </article>
    )
}

export default Comment
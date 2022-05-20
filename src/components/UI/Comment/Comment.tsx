import { FC } from "react"
import { IComment } from '../../../store/meetup/meetup.types'
import classes from './Comment.module.css'

interface Props {
  comment: IComment
}

const Comment: FC<Props> = (props) => {
    const { comment } = props
    const commentDate = comment.date.toLocaleDateString()
    return (
        <article className={classes.commentContainer}>      
            <p>{commentDate}</p>
            <p data-testid="commenters-name"><strong>{comment.name}</strong>: {comment.content}</p>
        </article>
    )
}

export default Comment
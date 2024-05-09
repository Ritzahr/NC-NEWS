import {useState} from 'react';

const CommentCard = ({prop}) => {
    const [votes, setVotes] = useState(prop.votes);
    const [isDisabled, setDisable] = useState(false)
    const incrementVote = () => {
        setVotes(votes+1)
        setDisable(true)

    }
    const decrementVote = () => {
        if (votes>0)
        setVotes(votes-1)
    }
    
  
    return (
        <section id='comment-box'>
        <p className="comment-meta">{prop.created_at}</p>
        <p id="comment-text">{prop.body}</p>
        <h5 className="comment-meta">Author: {prop.author}</h5>
        <p className="comment-meta">Likes: {votes}
        <button onClick={incrementVote} disabled={isDisabled} className="comment-meta">Like comment</button>
        <button onClick={decrementVote} disabled={isDisabled}className="comment-meta">Dislike comment</button>
        </p>
        
        </section>
    )
}
export default CommentCard
import {useEffect, useState} from 'react';
import { useContext } from 'react';
import { UserNameContext } from '../Contexts/Users';
import { deleteComment } from '../../api';
import { getCommentsByArticle } from '../../api';

const CommentCard = ({prop, states}) => {
    const [votes, setVotes] = useState(prop.votes);
    const [isDisabled, setDisable] = useState(false)
    const incrementVote = () => {
        setVotes(votes+1)
        setDisable(true)
    }
    const {userName, setUserName} = useContext(UserNameContext);
    const [commentDisplay, setCommentDisplay] = useState(prop)
  
    
    
    
    const decrementVote = () => {
        if (votes>0)
        setVotes(votes-1)
    }
    const handleDeleteBTN = (event) => {

        event.preventDefault()
        deleteComment(prop.comment_id).then(()=>{
            return getCommentsByArticle(prop.article_id)
        }).then(({comments}) => {
            setCommentDisplay(comments)
        });
        window.alert(`${prop.author} has deleted their comment`)
    }
        

    return (
        <section id='comment-box'>
        <p className="comment-meta">Posted: {prop.created_at}</p>
        <p id="comment-text">{prop.body}</p>
        <h5 className="comment-meta">Author: {prop.author}</h5>
        <p className="comment-meta">Likes: {votes}
        <button onClick={incrementVote} disabled={isDisabled} className="comment-meta">Like comment</button>
        <button onClick={decrementVote} disabled={isDisabled}className="comment-meta">Dislike comment</button>
        {prop.author===userName ? <button className='delete-btn' onClick={handleDeleteBTN}>Delete Comment</button> : null}
        </p>
        
        
        </section>
    )
}
export default CommentCard
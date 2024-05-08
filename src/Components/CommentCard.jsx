const CommentCard = ({prop}) => {
  
    return (
        <section id='comment-box'>
        <p className="comment-meta">{prop.created_at}</p>
        <p id="comment-text">{prop.body}</p>
        <p className="comment-meta">Author: {prop.author}</p>
        <p className="comment-meta">Likes: {prop.votes}
        <button className="comment-meta">Like this!</button>
        </p>
        
        </section>
    )
}
export default CommentCard
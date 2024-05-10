import AddComment from "./AddComment";
import CommentCard from "./CommentCard";


const Comments = ({states}) => {
    const [article_id, comments, setComments, showComments, setShowComments] = states;
   

    const commentClick = () => {
        setShowComments((currentState) => {
          return !currentState;
        });
      };

    return (
        <section>
            <button
                onClick={() => {commentClick()}}
                >Comments: {comments.length}
                </button>
                {showComments ? <AddComment props={[article_id, setComments]}/> : null}

                <ul className="comment-section">
                    {showComments
                    ? comments.reverse().map((comment) => {
                        return (
                            <li key={comment.comment_id}>
                            <CommentCard prop={comment} />
                            </li> 
                            ); 
                        }) : null}  
                </ul> 

        </section>
        
    )
}
export default Comments
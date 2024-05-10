import { useEffect } from "react";
import AddComment from "./AddComment";
import CommentCard from "./CommentCard";
import { getCommentsByArticle } from "../../api";


const Comments = ({states}) => {
    const [article_id, comments, setComments, showComments, setShowComments] = states;
    
    useEffect(()=> {
        getCommentsByArticle(article_id).then(({comments}) => {
            setComments(comments)
        })
    }, [comments])

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
                            <CommentCard prop={comment}/>
                            </li> 
                            ); 
                        }) : null}  
                </ul> 

        </section>
        
    )
}
export default Comments
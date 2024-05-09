import {
  getArticlesByID,
  getCommentsByArticle,
  updateArticleVotes,
} from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

const TargetArticle = () => {
  const [targetArticle, setTargetArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [likeIsDisabled, setLikeDisable] = useState(false);
  const [dislikeIsDisabled, setDislikeDisable] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    getArticlesByID(article_id).then(({ article }) => {
      setTargetArticle(article)
      setIsLoading(false);
    });
    getCommentsByArticle(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);


  const commentClick = () => {
    setShowComments((currentState) => {
      return !currentState;
    });
  };

  const clickHandle = ({target}) => {
    if (target.innerText==="Like") {
        targetArticle.votes+=1;
        updateArticleVotes(article_id, target.innerText),
        setLikeDisable(true);
    }
    if (target.innerText==="Dislike") {
        if (targetArticle.votes!==0) {
            targetArticle.votes-=1
        updateArticleVotes(article_id, target.innerText)
        setDislikeDisable(true)
        };
        setDislikeDisable(true)
    }
  };

  if (isLoading) return <h1>Loading article....</h1>;

  return (
    <>
      <section id="meta-info">
        <title>{targetArticle.title}</title>
        <h5>Date Created: {targetArticle.created_at}</h5>
        <h5>Author: {targetArticle.author}</h5>
        <h5>Topic: {targetArticle.topic}</h5>
      </section>
      <section id="page-content">
        <img src={targetArticle.article_img_url} />
        <p>{targetArticle.body}</p>
      </section>
      <section>
        <p>Likes: {targetArticle.votes}</p>
        <button
          disabled={likeIsDisabled}
          id={`like-btn-${likeIsDisabled}`}
          onClick={(event) => {clickHandle(event)}}
        >Like
        </button>
        <button
          disabled={dislikeIsDisabled}
          id={`dislike-btn-${dislikeIsDisabled}`}
          onClick={(event) => {clickHandle(event)}}
        >Dislike
        </button>
        <button
          onClick={() => {commentClick()}}
        >Comments: {targetArticle.comment_count}
        </button>
        <ul>
          {showComments
            ? comments.map((comment) => {
                return (
                  <li key={comment.comment_id}>
                    <CommentCard prop={comment} />
                  </li> 
                  ); 
                }) : null}
        </ul>
      </section>
    </>
  );
};

export default TargetArticle;

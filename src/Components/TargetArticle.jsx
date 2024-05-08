import { getArticlesByID, getCommentsByArticle } from "../../api";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import CommentCard from './CommentCard'


const TargetArticle = () => {
    const [targetArticle, setTargetArticle] = useState([]);
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { article_id } = useParams();

    const commentClick = () => {
        setShowComments((currentState)=>{
           return !currentState
        })
    }
    
    useEffect(()=>{
        getArticlesByID(article_id)
        .then(({ article }) => {
            setTargetArticle(article)
            setIsLoading(false)
        })
        getCommentsByArticle(article_id)
        .then(({comments}) => {
            setComments(comments)
        })
    }, [])  

    if(isLoading) return <h1>Loading article....</h1>
    
    return (
    <>
    <section id="meta-info"> 
      <title>{targetArticle.title}</title>
      <h5>Date Created: {targetArticle.created_at}</h5>
      <h5>Author: {targetArticle.author}</h5>
      <h5>Topic: {targetArticle.topic}</h5>
    </section>
    <section id="page-content"> 
        <img src={targetArticle.article_img_url}/>
        <p>{targetArticle.body}</p>
    </section>
    <section id="action"> 
        <button onClick={()=> {commentClick()}}>Comments: {targetArticle.comment_count}</button>
        <button>Likes: {targetArticle.votes}</button>
        <ul>
            {showComments ? comments.map((comment)=>{
            return <li key={comment.comment_id}><CommentCard prop={comment}/></li> 
        }): null}
        </ul>
    </section>
    </> 
)
}

export default TargetArticle
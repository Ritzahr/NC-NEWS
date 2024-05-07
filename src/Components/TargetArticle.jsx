import { getArticlesByID } from "../../api";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


const TargetArticle = () => {
    const [targetArticle, setTargetArticle] = useState([]);
    const { article_id } = useParams();
    
    useEffect(()=>{
        getArticlesByID(article_id)
        .then(({ article }) => {
            setTargetArticle(article)
        })
    }, [])  

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
        <button>Comments: 0</button>
        <button>Likes: 0</button>
    </section>
    </> 
)
}

export default TargetArticle
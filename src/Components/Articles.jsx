import Thumbnail from "./Thumbnail";
import getArticles, { getArticleByTopic } from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilterBtn from "./Filter";

const Articles = () => {
    const [articlePage, setArticlePage] = useState([])
    const [isLoading, setIsLoading] = useState(true);
   
    const queryString = window.location.search;

    useEffect(()=>{
        if (queryString) {
            getArticleByTopic(queryString).then(({articles}) => {
               
                setArticlePage(articles);
                setIsLoading(false)
            })
        } else {
            getArticles().then(({articles}) => {
                setArticlePage(articles);
                setIsLoading(false);
            })
        }
    }, []);


    if (isLoading) return <h1><p>Loading articles...</p></h1>
    return (
    <> 
     <h2>Articles</h2>
    <FilterBtn queryString={queryString} setArticlePage={setArticlePage}/>
     <section>
        <ul>
        {articlePage.map((article) => {
            return <Thumbnail key={article.article_id} prop={article}/>
        })}
        </ul>
     </section>
    </>
    )
}

export default Articles;
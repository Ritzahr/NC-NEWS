import Thumbnail from "./Thumbnail";
import getArticles, { getArticleByTopic } from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilterBtn from "./Filter";
import SortByBTN from "./SortBy";

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
     <h1>Articles</h1>
     <section className="options">
     <FilterBtn queryString={queryString} setArticlePage={setArticlePage}/>
     <SortByBTN setArticlePage={setArticlePage}/>
     </section>
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
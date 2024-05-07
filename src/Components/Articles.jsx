import Thumbnail from "./Thumbnail";
import getArticles from "../../api";
import { useEffect, useState } from "react";

const Articles = () => {
    const [articlePage, setArticlePage] = useState([])
    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{
        getArticles().then(({articles}) => {
            setArticlePage(articles);
            setIsLoading(false);
        })
    }, [])
    if (isLoading) return <h1><p>Loading articles...</p></h1>
    return (
    <> 
     <h2>Articles</h2>
     <button>Filter</button>
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
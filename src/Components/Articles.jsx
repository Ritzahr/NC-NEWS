import Thumbnail from "./Thumbnail";
import getArticles from "../../api";
import { useEffect, useState } from "react";

const Articles = () => {
    const [articlePage, setArticlePage] = useState([])

    useEffect(()=>{
        getArticles().then(({articles}) => {
            setArticlePage(articles)
        })
    }, [])

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
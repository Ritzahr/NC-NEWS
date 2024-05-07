import axios from 'axios'; 
const ncNews = axios.create({
    baseURL: 'https://nc-news-api-qqkg.onrender.com'
});


const getArticles = () => {
    return ncNews.get('/api/articles')
.then((response) => {
    
    return response.data
 })
}

export const getArticlesByID = (id) => { 
    return ncNews.get(`/api/articles/${id}`)
    .then((response) => {
        return response.data
    })
}

export default getArticles;
import axios from 'axios'; 
const ncNews = axios.create({
    baseURL: 'https://nc-news-api-qqkg.onrender.com'
});


const getArticles = () => {
    return ncNews.get('/api/articles')
        .then((response) => {
         return response.data
 }).catch((err) => {
    console.log(err)
    return err
 })
}

export const getCommentsByArticle = (id) => {
   
    return ncNews.get(`/api/articles/${id}/comments`)
    .then((response)=>{
        return response.data
    }).catch((err)=>{
        return err.message
    })
}

export const getArticlesByID = (id) => { 
   
    return ncNews.get(`/api/articles/${id}`)
    .then((response) => {
        return response.data
    }).catch((err) => {
        return err
    })
}

export const updateArticleVotes = (id, action) => {
    if (action==='Dislike') {
        return ncNews.patch(`/api/articles/${id}`, { inc_votes: -1 }).then((response) => {
            return response.data
        }).catch((err) => {
            return err
        })
    }
    if (action==='Like') {
        return ncNews.patch(`/api/articles/${id}`, { inc_votes: 1 }).then((response) => {
            return response.data
        }).catch((err) => {
            return err
        })
        }
}

export const postComment = (id, user, text) => {
    return ncNews.post(`/api/articles/${id}/comments`, { username: user, body: text})
    .then((response)=>{
        return response.data
    })
    .catch((err) => {
        return err
    })
}

export const deleteComment = (comment_id) => {

    return ncNews.delete(`/api/comments/${comment_id}`).then((response) => {
        return response
    })
}
export default getArticles;
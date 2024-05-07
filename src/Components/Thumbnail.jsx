import { Link } from 'react-router-dom'

const Thumbnail = ({prop}) =>{
    const url = `/articles/${prop.article_id}`
return (
    <section id='article-thumbnail'>
    <Link to={url}><img id='thumbnail-img' src={prop.article_img_url}/></Link>
    <p>{prop.title}</p>
    </section>
    
    
)
}

export default Thumbnail
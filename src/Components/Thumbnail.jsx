const Thumbnail = ({prop}) =>{
return (
    <section id='article-thumbnail'>
    <img id='thumbnail-img' src={prop.article_img_url}/>
    <p>{prop.title}</p>
    </section>
    
)
}

export default Thumbnail
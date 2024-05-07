import { Link } from 'react-router-dom'
const HomePage = () => {

    return (
        <section>
            <Link to='/articles'><button>Articles</button></Link>
            
            <button>Topics</button>
            <section id="home-previews">
                <img id="home-img" src="https://static.vecteezy.com/system/resources/previews/001/970/338/original/building-under-construction-site-free-vector.jpg"/>
                <p>Article preview</p>
            </section>
        </section>
    )

}
export default HomePage
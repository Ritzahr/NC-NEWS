import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header>
            <Link to='/'><button id="Home">Home</button></Link>
            <button id="Home">Profile</button>
            <h1>
                Northcoders News
            </h1>
            <h4>By developers for developers</h4>
        </header>
    )

}

export default Header
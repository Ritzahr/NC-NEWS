import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserNameContext } from '../Contexts/Users'


const Header = () => {
    const {userName, setUserName} = useContext(UserNameContext)
    
    return (
        <header className='header'>
            <Link to='/'><button className="Header-btn">Home</button></Link>
            <button className="Header-btn">Profile: {`${userName}`}</button>
            <h1>
                Northcoders News
            </h1>
            <h4>By developers for developers</h4>
        </header>
    )

}

export default Header
import { useEffect, useState } from "react"
import { getAllTopics } from "../../api"
import { Link } from 'react-router-dom'

const TopicsMenu = () => {
    const [revealMenu, setRevealMenu] = useState(false)
    const [value, selectValue] = useState('Topic')
    const [currentTopics, setCurrentTopics] = useState('')

    useEffect(()=>{
        getAllTopics().then(({topics}) => {
            setCurrentTopics(topics)
        })
    },[])
    

    const handleOnClick = () => { 
        setRevealMenu((currentState)=> {
            return !currentState
        })
    }

    return (
        <>
        <button onClick={()=>{handleOnClick()}}>Topics</button>
        {revealMenu ? <ul className="drop-menu"><h3>Choose a topic:</h3>
            {currentTopics.map((topic, index) => {
                return <li key={index} value={topic.description}><Link to={`/articles?topic=${topic.slug}`}>{topic.slug}</Link></li>
            })}
        </ul> : null}
        </>
    )
}

export default TopicsMenu;
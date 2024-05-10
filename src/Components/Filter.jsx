import { useState, useEffect } from "react"
import { getAllTopics } from "../../api"
import { getArticleByTopic } from "../../api"

const FilterBtn  = ({queryString, setArticlePage}) => {
    const [revealMenu, setRevealMenu] = useState(false)
    const [currentTopics, setCurrentTopics] = useState('');
    const [highlight, setHighLight] = useState(false);
    const [select, setSelect] = useState(queryString);
    let status = '';
    let isOn = false;

    useEffect(()=>{
        getAllTopics().then(({topics}) => {
            setCurrentTopics(topics)
        })
    }, [])
    

    const handleOnClick = () => { 
        setRevealMenu((currentState)=> {
            return !currentState
        })
    }

    const onClickTopic = (event) => {

        const string = `?topic=${event.target.innerText}`
        getArticleByTopic(string).then(({articles}) => {  
            setArticlePage(articles);
            setSelect(string);
        })
    }

    return (
        <>
        <button onClick={()=>{handleOnClick()}}>Filter</button>
        {revealMenu ? <ul className="drop-menu">
            {currentTopics.map((topic, index) => {
                select.includes(topic.slug)? status = "found" : status = "nope";
                status === "found" ? isOn = true : isOn=false;
                return <li key={index} value={topic.description}><button id={status} disabled={isOn} onClick={onClickTopic}>{topic.slug}</button></li>
            })}
        </ul> : null}
        </>
    )
}

export default FilterBtn
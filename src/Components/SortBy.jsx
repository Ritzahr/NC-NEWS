import { useState }  from 'react'
import getArticles from '../../api';

const SortByBTN = ({setArticlePage}) => {
    const [revealMenu, setRevealMenu] = useState(false);
    const [order, setOrder] = useState('Ascending');
    const options = ['Date', 'Comment Count', 'Votes']
    let sortBy =''
    const handleOnClick = () => { 
        setRevealMenu((currentState)=> {
            return !currentState
        })
    }
    const handleOptionClick = (event) => {
        sortBy = event.target.innerHTML;
        getArticles().then(({articles})=>{
            if (order==="Ascending") {
            const ascSort = articles.sort((a,b) => {
                if (sortBy==="Comment Count") return a.comment_count - b.comment_count
                if (sortBy==="Date") return a.created_at - b.created_at;
                if (sortBy==="Votes") return a.votes - b.votes;
            }) 
            setArticlePage(ascSort)
        } else if (order==="Descending") {
            const descSort = articles.sort((a,b) => {
                if (sortBy==="Comment Count") return b.comment_count - a.comment_count;
                if (sortBy==="Date") return  b.created_at - a.created_at;
                if (sortBy==="Votes") return b.votes - a.votes;
            })
            setArticlePage(descSort)
        }
        })
    }
    const orderToggle = () => {
        setOrder("Descending")
        
    }

    return (
        <section>
        <button onClick={handleOnClick}>Sort By:</button>
        {revealMenu ? <ul className="drop-menu">
            {options.map((option, index) => {
                return <li key={index}><button onClick={handleOptionClick}>{option}</button></li>
            })}
            <button className='Order-btn' onClick={orderToggle}>{order}</button>
        </ul> : null}
        </section>
    )

}

export default SortByBTN
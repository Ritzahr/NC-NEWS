import { useState } from "react"
import { useContext } from "react"
import { UserNameContext } from "../Contexts/Users"
import { postComment } from "../../api"
import { getCommentsByArticle } from "../../api"


const AddComment = ({props}) => {
    const [article_id, setComments] = props;

    const [addCommentForm, setAddCommentForm] = useState(false)
    const { userName, setUserName } = useContext(UserNameContext)
    const [formInput, setFormInput] = useState('');
    const [IsDisabled, setDisable] = useState(true);
    

    const revealCommentForm = () => {
        setAddCommentForm((currentState) => {
            return !currentState
        })
    }
    const handleOnInput = (event) => {
        setFormInput(event.target.value)
        if(event.target.textLength===0) {
            setDisable(true)
        } else {
            setDisable(false)
        }
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postComment(article_id, userName, formInput).then(()=>{
        }).then(() => {
            return getCommentsByArticle(article_id)
        }).then(({ comments }) => {
            setComments(comments);
          });
        window.alert("Comment Submitted")
        revealCommentForm();
       }

    return (
    <section> 
        <button onClick={()=> {revealCommentForm()}}>Add Comment</button>
        {addCommentForm ? 
         <form onSubmit={handleSubmit}>
            <label htmlFor="user">User:<p><b>{userName}</b></p></label>
            <label htmlFor="comment">Type Comment: </label>
            <input name='comment'id="comment-input" type='text' maxLength="250" value={formInput} onInput={(event)=>handleOnInput(event)}></input>
            <input disabled={IsDisabled}type="submit" value="Submit"></input>
        </form> : null}
    </section>
    )
}

export default AddComment
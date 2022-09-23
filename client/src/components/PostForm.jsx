import React, { useState } from 'react'
import axios from 'axios'

const PostForm = (props) => {
    const [content, setContent] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/posts/${props.userId}`, {
            content, 
            user: props.userId
        })
            .then(res=>console.log("success"))
            .catch(err=>console.log("failed"))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Content</label>
                    <input type="text" name="content" value={content}
                        onChange={e => setContent(e.target.value)} className="form-control" />
                </div>
                <button type="submit" className='btn btn-primary btn-block'>Post</button>
            </form>
        </div>
    )
}

export default PostForm
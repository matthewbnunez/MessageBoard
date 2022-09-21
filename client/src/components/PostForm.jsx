import React, { useState } from 'react'
import axios from 'axios'

const PostForm = () => {
    const [user, setUser] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/posts`, {user, content})
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User</label>
                    <input type="text" name="user" value={user}
                        onChange={e => setUser(e.target.value)} className="form-control" />
                </div>
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
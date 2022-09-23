import React from 'react'
import axios from 'axios'

const DisplayPosts = (props) => {
    const { removeFromDom } = props;
    
    const deletePost = (postId) => {
        axios.delete(`http://localhost:8000/api/posts/${postId}`)
            .then(res => {
                removeFromDom(postId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            {props.posts.map((post, i) =>(
                <p key={i}>
                    {post.user}, {post.content}
                    <button onClick={(e) => { deletePost(post._id) }}>
                        Delete
                    </button>
                </p>
            ))}
        </div>
    )
}

export default DisplayPosts
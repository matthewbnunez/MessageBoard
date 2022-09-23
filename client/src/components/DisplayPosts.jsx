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
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Message</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.posts?.map((post, i) => (
                            <tr key={i}>
                                <td>{post.user}</td>
                                <td>{post.content}</td>
                                <button className="btn btn-outline-warning" onClick={(e) => { deletePost(post._id) }}>Delete</button>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayPosts
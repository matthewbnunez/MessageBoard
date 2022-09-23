import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const DisplayUsers = (props) => {
    const { removeFromDom } = props;
    
    const deletePost = (userId) => {
        axios.delete(`http://localhost:8000/api/user/${userId}`)
            .then(res => {
                removeFromDom(userId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            {props.users.map((user, i) =>
                <p key={i}>
                    <Link to={`/users/${user._id}`}>{user.firstName}, {user.lastName}</Link>
                    |
                    {user.email}
                    |
                    {user.password}
                    <button onClick={(e) => { deletePost(user._id) }}>
                        Delete
                    </button>
                </p>
            )}
        </div>
    )
}

export default DisplayUsers
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
            <table className = "table table-hover">
            <thead>
                <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.map((user, i)=>{
                        return(
                            <tr key={i}>
                                <td><Link to={`/users/${user._id}`}>{user.firstName}, {user.lastName}</Link></td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>
                                    <button className="btn btn-outline-warning" onClick={(e) => { deletePost(user._id) }}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
        </div>
    )
}

export default DisplayUsers
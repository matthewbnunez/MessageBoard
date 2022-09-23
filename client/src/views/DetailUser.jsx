import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import PostForm from '../components/PostForm';
import DisplayPosts from '../components/DisplayPosts';

const DetailUser = () => {
    const [user, setUser] = useState()
    const [posts, SetPost] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
            .then(res => {
                console.log(res.data)
                setUser(res.data)
            })
            .catch(err => setUser());
    }, [id]);

    const removeFromDom = postId => {
        SetPost(posts.filter(post => post._id !== postId));
    }

    return (
        <div>
            {
                user ?
                    <div>
                        <p> First Name: {user.firstName}</p >
                        <p>Last Name: {user.lastName}</p>
                        <p>Email: {user.email}</p>
                        <p>Password: {user.password}</p>
                        <p>Posts: {user.posts}</p>
                        <PostForm userId={id} />
                        <DisplayPosts posts={user.posts} removeFromDom={removeFromDom} />
                    </div> :
                    <h1> Please make sure the ID is correct. </h1>
            }
        </div>
    )
}

export default DetailUser
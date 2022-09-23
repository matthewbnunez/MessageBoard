import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import PostForm from '../components/PostForm';
import DisplayPosts from '../components/DisplayPosts';

const DetailUser = () => {
    const [user, setUser] = useState({})
    const [posts, SetPost] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
            .then(res => setUser(res.data))
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = postId => {
        SetPost(posts.filter(post => post._id !== postId));
    }
    
    return (
        <div>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <PostForm userId = {id}/>
            <DisplayPosts posts={user.posts} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default DetailUser
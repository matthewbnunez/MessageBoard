import React, { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';
import PostForm from '../components/PostForm';
import DisplayPosts from '../components/DisplayPosts';
import axios from 'axios'

const Main = (props) => {
    const [posts, setPosts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/posts')
            .then(res=>{
                setPosts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = postId => {
        setPosts(posts.filter(post => post._id !== postId));
    }

    return (
        <div>
            <h1 className="text-center">The best message board in the world</h1>
            <UserForm />
            <PostForm />
            {loaded && <DisplayPosts posts={posts} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;
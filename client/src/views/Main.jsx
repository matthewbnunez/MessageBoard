import React, { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';
import PostForm from '../components/PostForm';
import DisplayPosts from '../components/DisplayPosts';
import axios from 'axios'

const Main = () => {
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

    return (
        <div className="App">
            {/* <UserForm /> */}
            <PostForm />
            {loaded && <DisplayPosts posts={posts}/>}

        </div>
    )
}

export default Main;
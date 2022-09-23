import React, { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';
import DisplayUsers from '../components/DisplayUsers';
import axios from 'axios'

const Main = () => {
    const [users, setUsers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/users')
            .then(res=>{
                setUsers(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = userId => {
        setUsers(users.filter(user => user._id !== userId));
    }

    return (
        <div>
            <h1 className="text-center">The best message board in the world</h1>
            <UserForm />
            {loaded && <DisplayUsers users={users} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;
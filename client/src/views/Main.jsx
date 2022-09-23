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
        <div className="App">
            <UserForm />
            {loaded && <DisplayUsers users={users} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;
import React, { useState } from 'react'
import axios from 'axios';

const UserForm = (props) => {
    //keep track of what is being typed via useState hook
    const [userName, setUserName] = useState(""); 
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/user', {
            userName,
            firstName,
            lastName,
            password
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <div className="form-group">
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>User Name</label><br/>
                <input className="form-control" type="text" onChange={(e)=>setUserName(e.target.value)} value={userName}/>
            </p>
            <p>
                <label>First Name</label><br/>
                <input className="form-control" type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input className="form-control" type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
            </p>
            <p>
                <label>Password</label><br/>
                <input className="form-control" type="text" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </p>
            <button type='submit' className="btn btn-success">Submit</button>
        </form>
        </div>
    )
}

export default UserForm;
import React, { useState } from 'react'
import axios from 'axios';

const UserForm = () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);
    // const [password, setPassword] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/users', {
            firstName,
            lastName,
            email
            // password
        })
            .then(res => console.log(res))
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    //onChange to update firstName and lastName
    return (
        <div className="form-group">
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p class="text-danger" key={index}>{err}</p>)}
                <p>
                    <label>First Name</label><br />
                    <input className="form-control" type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input className="form-control" type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </p>
                <p>
                    <label>Email</label><br />
                    <input className="form-control" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </p>
                {/* <p>
                <label>Password</label><br/>
                <input className="form-control" type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </p> */}
                <button type='submit' className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default UserForm;
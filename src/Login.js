import axios from 'axios';
import React, { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom';
import "./Login.css"

function Login()
{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

     const handleSubmit=(e)=>
     {
        e.preventDefault();
     }
     return(
        <div>
        <form onSubmit={handleSubmit} id="formlogin">
        <h3>Login</h3>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="text"
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/home">
      <button type="submit">Login</button>
      </Link>
        </form>
        </div>
     )
}

export default Login;

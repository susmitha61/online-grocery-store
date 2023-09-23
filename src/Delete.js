
import axios from 'axios';
import React, { useState } from 'react'
import './Delete.css'

function Delete()
{
    const[id,setId]=useState('');

     const handleSubmit=(e)=>
     {
        e.preventDefault();
        axios.delete(`http://localhost:8080/delete/${id}`)
        .then(console.log("Deleted successfully"))
     }
     return(
        <>
        <form onSubmit={handleSubmit} id="formdelete">
        <h3>Delete</h3>
        <label>Id</label>
        <input
          type="text"
          value={id}
          placeholder='Id'
          onChange={(e) => setId(e.target.value)}
        />
      <button type="submit">Submit</button>
        </form>
        </>
     )
}

export default Delete;

import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import "./GetData.css"
export default function GetData() {

    const[info,setInfo]=useState([])
    useEffect(() => {
        fetchData();
      }, []);
    const fetchData=(e)=>{


        axios.get('http://localhost:8080/getdetails')
        .then(res=>setInfo(res.data))
    }
  return (
    <div id="formget"><h1>Deatils</h1>
    <br></br>
        {info.map(data=>(
            <div >
            <h2>Product Name: {data.productName} </h2>
             <h2>Brand Name: {data.brandName}</h2>
             <h2>Price: {data.price}</h2>
             <h2>Quantity: {data.quantity}</h2>
             <h2>Description: {data.description}</h2>
             <br></br>
        </div>))
    }
    </div>
  )
}

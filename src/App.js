import React from "react";
import "./App.css";
 import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home"; 
// import Layout from "./Layout";
import PostValues from "./PostValues";
import GetData from "./GetData";
import UpdateValues from "./UpdateValues";
import Delete from "./Delete";
// import { Cart } from "./cart";
// import { Shop } from "./shop";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

	return (
		<Router>
            <div>
                <Routes>
                {/* <Route path="/" element={<Shop />} /> */}
                    <Route index path="/" element={ <Home/> } />
                    <Route path="/signup" element={ <SignUp/> } />
                     <Route path="/login" element={ <Login/> } /> 
                     {/* <Route path="/layout" element={<Layout />}/> */}
                    <Route path="/home" element={<Home />} />
                     <Route path="/postvalues" element={<PostValues />}/>
                     <Route path="/getdata" element={<GetData />}/>
                     <Route path="/updatevalues" element={<UpdateValues />}/>
                     <Route path="/delete" element={<Delete />}/>
                     {/* <Route path="/cart" element={<Cart />} /> */}
                </Routes>
            </div>
        </Router>
       
	);
}

export default App;

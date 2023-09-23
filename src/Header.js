import React from 'react';
import "./Header.css";
import logo from "./brand1.png";
import call from "./call.png";
import { BiSearchAlt, BiUser } from 'react-icons/bi';
import { BsHeart, BsCart2 } from 'react-icons/bs';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className='header-container'>

            <div className='logo-search-cont'>
                <img src={logo} alt="" />
                <div className='search-cont'>
                    <BiSearchAlt className='icon' />
                    <input type="text" placeholder='Search Products' />
                </div>
            </div>

              <div className='contact-social-cont'>

                <div className='contact'>
                    <img src={call} alt="" />
                    {/* <p>Call Us <br /><br/></p> */}
                </div> 
                <div className='social-icon-cont'>
                <Link to="/signup">
                    <div className='headerIcon'>
                        <BiUser className='headerIcon-size' />
                    </div>
                </Link>
                    <div className='headerIcon'>
                        <BsHeart className='headerIcon-size' />
                    </div>

                     <div className='headerIcon'>
                        <BsCart2 className='headerIcon-size' />
                    </div> 
                </div> 

            </div>

        </div>
    );
};

export default Header;
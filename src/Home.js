import React from 'react';
import Advertisements from './Advertisements';
//import Blog from './Blog';
import DisplaySection from './DisplaySection';
import FeatureProducts from './FeatureProducts';
//import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import TopSell from './TopSell';
import "./Home.css";
const Home = () => {

    return (
        <div>
            <Header />
            <Navbar />
             <DisplaySection />
            <FeatureProducts /> 
             <Advertisements />
            <TopSell />
            {/* <Blog />
         
            <Footer/>   */}
        </div>
            
    );
};

export default Home;
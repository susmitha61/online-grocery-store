import React from 'react';
import img1 from "./dp-image-1.png.webp";
import img2 from "./disp.png";
import img3 from "./disps.png";
import img4 from "./Healthy food.png";
import img5 from "./Home Made.png";
import img6 from "./Natural.png";
import img7 from "./fastdelivery.png";
// import img8 from "./flowerkolly.png";
 import cherry from "./cherry.png";
//import tomato from "./tomato.png";
import orange from "./orange slice.png";
import plate from "./plate.png";
import { MdDoubleArrow } from 'react-icons/md';
import "./DisplaySection.css";
import { TypeAnimation } from 'react-type-animation';


const DisplaySection = () => {

    return (
        <div className='mx-[320px] mt-[25px]'>

            <div className='flex gap-[51px]'>

                <div className='display-first-section'>

                    {/* <img src={img8} className="absolute -z-10" alt="" /> */}

                    <div data-aos="fade-down" data-aos-duration="2000" className="absolute left-[40px] top-[20px]">
                        <img src={cherry} alt="" />
                    </div>
{/* 
                    <div data-aos="fade-right" data-aos-duration="2000" className="absolute left-[5x] bottom-[0px]">
                        <img src={tomato} alt="" />
                    </div> */}

                    <div data-aos="fade-left" data-aos-duration="2000" className="absolute right-[0px] bottom-[15px]">
                        <img src={orange} alt="" />
                    </div>

                    <div className=" absolute right-[150px] bottom-[-100px]">
                        <img src={plate} className="rotate" alt="" />
                    </div>


                    <div className='content-sec-one'>
                        <h2>DELICIOUS</h2>
                        <h1>SALAD</h1>
                        <h3>

                            <TypeAnimation
                                sequence={['EVERYDAY.', 2000, '']}
                                speed={50}
                                repeat={Infinity}
                            />
                        </h3>

                        <div className='shop-now-btn ml-[250px]'>
                            <button>Shop Now</button>
                             <MdDoubleArrow className='ml-1 ' /> 
                        </div>

                    </div>
                    
                    <img src={img1} alt="" />
                </div>

                <div className='grid gap-[30px]'>

                    <div className='relative'>

                        <div className='content-section-two'>
                            <h1>Fresh</h1>
                            <h2>Vegetables</h2>

                            <div className='shop-now-btn'>
                                <button>Shop Now</button>
                                 <MdDoubleArrow className='ml-1 ' /> 
                            </div>
                        </div>

                        <div class="hover05 column">
                            <div>
                                <figure>
                            <img src={img2} alt="" />  
                                  
                                </figure> 
                            </div>
                        </div>

                    </div>

                    <div className='relative'>

                        <div className='content-section-three'>
                            <h1>Fresh</h1>
                            <h2>EVERYDAY</h2>
                            <div className='shop-now-btn'>
                                <button>Shop Now</button>
                                <MdDoubleArrow className='ml-1 ' /> 
                            </div>
                        </div>

                         <div class="hover05 column">
                            <div>
                                <figure>
                                    <img src={img3} alt="" />  
                                   
                                </figure> 
                            </div> 
                        </div>
                    </div>

                </div>
            </div>

            {/* Sub Section */}
            <div className='sub-section'>

                <div className='sub-section-cont'>
                    <div className='main-section'>
                        <img src={img4} className="w-[93px] h-[93px]" alt="" />
                        <div>
                            <h2>Healthy Food</h2>
                            <p>It is a long established <br /> fact that </p>
                        </div>
                    </div>
                </div>

                <div className='sub-section-cont'>
                    <div className='main-section'>
                        <img src={img5} className="w-[95px] h-[95px]" alt="" />
                        <div>
                            <h2>Home Made</h2>
                            <p>It is a long established <br /> fact that </p>
                        </div>
                    </div>
                </div>

                <div className='sub-section-cont'>
                    <div className='main-section'>
                        <img src={img6} className="w-[76px] h-[81px]" alt="" />
                        <div>
                            <h2>100% Natural</h2>
                            <p>It is a long established <br /> fact that </p>
                        </div>
                    </div>
                </div>

                <div className='sub-section-cont'>
                    <div className='main-section'>
                        <img src={img7} className="w-[119px] h-[64px]" alt="" />
                        <div>
                            <h2>Fast Delivery</h2>
                            <p>It is a long established <br /> fact that </p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='mt-[30px]' />

        </div>
    );
};

export default DisplaySection;
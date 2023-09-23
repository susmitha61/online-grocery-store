import React from 'react';
import "./Advertisements.css";
import i1 from "./ad1.png";
import i2 from "./ad2.png";
import i3 from "./ad3.png";
import i4 from "./ad4.png";
import i5 from "./ad5.png";
import { MdDoubleArrow } from 'react-icons/md';

const Advertisement = () => {
    return (
        <div className='advertisement-container'>

            <div className='advertisement-sub-container'>

                <div className='cont-img'>
                    <div className='hoverImg'>
                        <div className='hoverImg-content'>
                            <div className='shop-now-btn ml-[125px]'>
                                <button>Shop Now</button>
                                <MdDoubleArrow className='ml-1 ' />
                            </div>
                            <h1>FRUITS</h1>
                            <p >Why do we need it?</p>
                        </div>
                        <img src={i1} alt="" />
                    </div>
                </div>

                <div>
                    <div className='relative'>
                        <div className='center-img-centent'>
                            <h1>GROCERY</h1>
                            <p>SHOP FROM HOME</p>
                            <div className='shop-now-btn ml-[70px]'>
                                <button>Shop Now</button>
                                <MdDoubleArrow className='ml-1 ' />
                            </div>
                        </div>

                        <div class="hover02 column-top">
                            <div>
                                <div className='center-top-img'>
                                    <img src={i2} className="" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='flex gap-[28px] mt-[20px]'>

                        <div className='relative'>
                            <div className='bottom-img1-content'>
                                <h1>DAIRY</h1>
                                <p>GOOD FOR HEALTH</p>
                                <div className='shop-now-btn'>
                                    <button>Shop Now</button>
                                    <MdDoubleArrow className='ml-1 ' />
                                </div>
                                <div className='bg-black h-[1px]  w-[40%]' />
                            </div>

                            <div class="hover03 column">
                                <div>
                                    <div className='bottomTwoImg'>
                                        <img src={i3} className="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative'>
                            <div className='absolute z-10 left-[10px] top-[10px]'>
                                <h1 className='text-[35px] font-[900] text-[#881F16] leading-[40px]'>MILK</h1>
                                <p className='text-[15px] text-[#882016a6] text-center'>Why do we use it?</p>

                                <div className='font-[500] text-[#41503F] flex items-center'>
                                    <button>Shop Now</button>
                                    <MdDoubleArrow className='ml-1 ' />

                                </div>
                                <div className='bg-black h-[1px]  w-[40%]' />
                            </div>
                            <div class="hover03 column border">
                                <div>
                                    <div className='bottomTwoImg'>
                                        <img src={i4} className="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='cont-img'>
                    <div className='hoverImg relative'>
                        <div className='right-img-content'>
                            <h1>JAM</h1>
                            <p>CAN BE USED IN BREAD</p>
                        </div>
                        <img src={i5} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Advertisement;
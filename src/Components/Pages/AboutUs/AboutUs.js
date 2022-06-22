import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faHourglass,faGem,faUser,faFileVideo,faStar,faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import team from '../../Image/about/pexels-anna-shvets-3986958-150x150.jpg';
import AnimatedNumbers from "react-animated-numbers";
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className='abouts py-5'>
            <div className='container-fluid px-4'>
                <div className='about-area'>
                    {/* ----------about top content----------- */}
                    <div className='row g-4 '>
                        {/* ----------about sidebar----------- */}
                        <div className='col-md-4 col-12 '>
                            <div className='myflexbox border'>
                            <h2> About Us </h2>
                            </div>
                        </div>
                        {/* ----------about content----------- */}
                        <div className='col-md-8 col-12 about-content'>
                            <p><span style={{color:" #4A6375",fontWeight:'bolder'}}>Tech Cloud Ltd </span> runs its operation worldwide from 2013 to be the<span style={{color:" #4A6375",fontWeight:'bolder'}}> global IT and ITES Service</span> provider. Providing a real-time solution, creatively using cutting edge technology without compromising quality; that’s the goal of Tech Cloud Ltd.We have been working to provide innovative solutions in the area of IT and ITES products locally and globally from the very start of the business in 2013. To create opportunity and assist the market Tech cloud experts are providing out of the box solutions in</p>
                            <li>Image Post Production</li>
                            <li>Graphic Design</li>
                            <li>Digital Marketing</li>
                            <li>Website Design and Development</li>
                            <li>Local and global SEO, etc.</li>
                        </div>
                    </div>
                     {/* ----------about bottom content----------- */}
                    <div className='mt-4'>
                    <p>We are comprehensively supporting our valued clients around the world with quality and cost effective way and faster turnaround time. We aim to create long-term customer relationships. Through being customer-oriented and providing the highest quality of service and versatility to our customers.</p>
                    <p><span style={{color:" #4A6375",fontWeight:'bolder'}}>Established in 2013</span> under the private limited company act of Bangladesh with an aim to serve globally. Tech Cloud already achieved the trust of different clients from different regions on serving quality services in terms of time and cost and has a strong belief to provide better and better services in the coming days.</p>
                    <p><span style={{color:" #4A6375",fontWeight:'bolder'}}>Tech Cloud </span>has been selected as one of the top IT companies in Bangladesh to create and support jobs by enhancing the export competitiveness of its ITES sector, by International Trade Center with the help of BASIS (Bangladesh Association of Software & Information Services)</p>
                    </div>
                    {/* ----------about goal area----------- */}
                    <div className='mt-5'>
                        <div className='row g-4'>
                            {/* ---------------vision-area------------- */}
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='goal-area  border  bg-white text-center'>
                                   <FontAwesomeIcon className='goal-icon' icon={faEye} />
                                    <h3>Our Vision</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                                </div>
                            </div>
                              {/* ---------------mission-area------------- */}
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='goal-area  border  bg-white text-center'>
                                   <FontAwesomeIcon className='goal-icon' icon={faHourglass} />
                                   <h3>Our Mision</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                                </div>
                            </div>
                              {/* ---------------value-area------------- */}
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='goal-area  border bg-white text-center'>
                                 <FontAwesomeIcon className='goal-icon' icon={faGem} />
                                  <h3>Our Value</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -----------our-team--------- */}
                    <div className='team-section text-center mt-5'>
                        <h2>OUR TEAM</h2>
                            <div className='title-border'>
                                <div className='title-border-inner'></div>
                                <div className='title-border-inner'></div>
                                <div className='title-border-inner'></div>
                                <div className='title-border-inner'></div>
                            </div>
                        <div className='row g-4  pt-5 '>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='border team bg-white py-4 rounded-3 px-3'>
                                <img src={team} alt="" />
                                <h3>Rakibul Islam</h3>
                                <h4>Graphics Designer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                               <div className='border team bg-white py-4 rounded-3 px-3'>
                                <img src={team} alt="" />
                                <h3>Rakibul Islam</h3>
                                <h4>Graphics Designer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                              <div className='border team bg-white py-4 rounded-3 px-3'>
                                <img src={team} alt="" />
                                <h3>Rakibul Islam</h3>
                                <h4>Graphics Designer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                              <div className='border team bg-white py-4 rounded-3 px-3'>
                                <img src={team} alt="" />
                                <h3>Rakibul Islam</h3>
                                <h4>Graphics Designer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                              <div className='border team bg-white py-4 rounded-3 px-3'>
                                <img src={team} alt="" />
                                <h3>Rakibul Islam</h3>
                                <h4>Graphics Designer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                              <div className='border team bg-white py-4 rounded-3 px-3'>
                                <img src={team} alt="" />
                                <h3>Rakibul Islam</h3>
                                <h4>Graphics Designer</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ----------fact-area------------ */}
                     <div className='fact-area bg-white py-5 mt-5 '>
                        <div className='row align-items-center justify-content-center text-center'>
                            <div className='col-lg-3 col-md-6 col-12'>
                            <FontAwesomeIcon style={{background:"#9951D01A",color:'#9951D0'}} className='fact-icon' icon={faUser} />
                            <div className='d-flex align-items-center justify-content-center'>
                                   <span >
                                <AnimatedNumbers
                                    animateToNumber={937}
                                    fontStyle={{ fontSize: 45,fontWeight:700 }}
                                    configs={[
                                        {
                                            mass: 1,
                                            tension: 220,
                                            friction: 100,
                                        },
                                        {
                                            mass: 1,
                                            tension: 180,
                                            friction: 130,
                                        },
                                        { mass: 1, tension: 280, friction: 90 },
                                        {
                                            mass: 1,
                                            tension: 180,
                                            friction: 135,
                                        },
                                        { mass: 1, tension: 280, friction: 90 },
                                    ]}
                                ></AnimatedNumbers>
                            </span>
                            <p style={{fontSize:"45px",marginTop:'25px',color:'black',fontWeight:"700"}}>M</p>
                            </div>  
                                <p>Total Seller</p>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12'>
                            <FontAwesomeIcon style={{background:"#1ABB691A",color:'#1ABB69'}} className='fact-icon' icon={faFileVideo} />
                            <div className='d-flex align-items-center justify-content-center'>
                                   <span >
                                <AnimatedNumbers
                                    animateToNumber={640}
                                    fontStyle={{ fontSize: 45,fontWeight:700 }}
                                    configs={[
                                        {
                                            mass: 1,
                                            tension: 220,
                                            friction: 100,
                                        },
                                        {
                                            mass: 1,
                                            tension: 180,
                                            friction: 130,
                                        },
                                        { mass: 1, tension: 280, friction: 90 },
                                        {
                                            mass: 1,
                                            tension: 180,
                                            friction: 135,
                                        },
                                        { mass: 1, tension: 280, friction: 90 },
                                    ]}
                                ></AnimatedNumbers>
                            </span>
                            <p style={{fontSize:"45px",marginTop:'25px',color:'black',fontWeight:"700"}}>K</p>
                            </div>  
                                <p>Total Video edit</p>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12'>
                            <FontAwesomeIcon style={{background:"#F78F0E1A",color:'#F78F0E'}} className='fact-icon' icon={faStar} />
                            <div className='d-flex align-items-center justify-content-center'>
                                   <span >
                                <AnimatedNumbers
                                    animateToNumber={546}
                                    fontStyle={{ fontSize: 45,fontWeight:700 }}
                                    configs={[
                                        {
                                            mass: 1,
                                            tension: 220,
                                            friction: 100,
                                        },
                                        {
                                            mass: 1,
                                            tension: 180,
                                            friction: 130,
                                        },
                                        { mass: 1, tension: 280, friction: 90 },
                                        {
                                            mass: 1,
                                            tension: 180,
                                            friction: 135,
                                        },
                                        { mass: 1, tension: 280, friction: 90 },
                                    ]}
                                ></AnimatedNumbers>
                            </span>
                            <p style={{fontSize:"45px",marginTop:'25px',color:'black',fontWeight:"700"}}>M</p>
                            </div>  
                                <p>Positive Review</p>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12'>
                            <FontAwesomeIcon style={{background:"#FEE7ED",color:'#F5164A'}} className='fact-icon' icon={faBoxOpen} />
                                 <div className='d-flex align-items-center justify-content-center'>
                                   <span >
                                <AnimatedNumbers
                                    animateToNumber={765}
                                    fontStyle={{ fontSize: 45,fontWeight:700 }}
                                    configs={[
                                        {
                                            mass: 1,
                                            tension: 220,
                                            friction: 100,
                                        },
                                        {
                                            mass: 1,
                                            tension: 180,
                                            friction: 130,
                                        },
                                        { mass: 1, tension: 280, friction: 90 },
                                        {
                                            mass: 1,
                                            tension: 180,
                                            friction: 135,
                                        },
                                        { mass: 1, tension: 280, friction: 90 },
                                    ]}
                                ></AnimatedNumbers>
                            </span>
                            <p style={{fontSize:"45px",marginTop:'25px',color:'black',fontWeight:"700"}}>K</p>
                            </div>    
                                <p>Order recieved</p>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
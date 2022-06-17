import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer pb-3 pt-5'>
            <div className='container'>
                <div className='row g-4 footer-top'>
                    <div className='col-lg-3 col-md-6 col-12 about '>
                        <h6>About</h6>
                        <p>Head Office</p>
                        <p>Baliapukur, kajla, Rajshahi</p>
                        <p>Bangladesh</p>
                        <p>codestudio4@gmail.com</p>
                        <p>+880 1784286885</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12 sevices '>
                        <h6>Services</h6>
                        <p>Mobile Application Development</p>
                        <p>Web Application Development</p>
                        <p>User Interface & Experience</p>
                        <p>Design</p>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 offer'>
                        <h6>We have a special offer for you</h6>
                        <input placeholder='Email' className='email' type="email" name="" id="" />
        
                        <input  className='submit' type="submit" value="Get Offer" />

                    </div>
                    <div className='col-lg-2 col-md-6 col-12 social'>
                        <button>Facebook</button>
                    </div>
                </div>
                <div className='footer'>
                <p className='text-center'>CODE STUDIO SOFTWARE COMPANY LIMITED</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
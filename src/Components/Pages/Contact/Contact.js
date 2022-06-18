import React from 'react';

const Contact = () => {
    return (
        <div className='container'>
            <div className='contact-area'>
                {/* -----------contact------------ */}
                <div className='contact text-center'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <h2>Address</h2>
                            <p>328 Queensberry Street, North Melbourne VIC 3051</p>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <h2>Email</h2>
                            <p>example@emailaddr.com</p>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <h2>Conatct</h2>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <h2>Location</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
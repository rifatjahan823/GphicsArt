import React from 'react';
import video from '../../Image/video/SANDRA N - Chameleon -by Monoir- -Official Video-.mp4';
import './HowItsWork.css'

const HowItsWork = () => {
    return (
        <div className='container py-4'>
            <div className='row g-4'>
                <div className='col-lg-4 col-md-6 col-12'>
                    <video width='100%' controls>
                    <source src={video} type="video/mp4"/>
                    </video>
                    <div className='video-content'>
                        <h3>This is a title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12'>
                <video width='100%' controls>
                    <source src={video} type="video/mp4"/>
                    </video>
                    <div className='video-content'>
                        <h3>This is a title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12'>
                <video width='100%' controls>
                    <source src={video} type="video/mp4"/>
                    </video>
                    <div className='video-content'>
                        <h3>This is a title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12'>
                <video width='100%' controls>
                    <source src={video} type="video/mp4"/>
                    </video>
                    <div className='video-content'>
                        <h3>This is a title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12'>
                <video width='100%' controls>
                    <source src={video} type="video/mp4"/>
                    </video>
                    <div className='video-content'>
                        <h3>This is a title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12'>
                <video width='100%' controls>
                    <source src={video} type="video/mp4"/>
                    </video>
                    <div className='video-content'>
                        <h3>This is a title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItsWork;
import React from 'react';
import { useState } from 'react';
import video from '../../Image/video/SANDRA N - Chameleon -by Monoir- -Official Video-.mp4';
import './HowItsWork.css';

const HowItsWork = () => {
    const [read,setRead]=useState(false);
    const [read2,setRead2]=useState(false);
    const [read3,setRead3]=useState(false);
    const [read4,setRead4]=useState(false);
    const [read5,setRead5]=useState(false);
    const [read6,setRead6]=useState(false);
   
    return (
        <div className='container-fluid py-4 px-4'>
            <div className='row g-4'>
                <div className='col-lg-4 col-md-6 col-12'>
                    <video width='100%' controls>
                    <source src={video} type="video/mp4"/>
                    </video>
                    <div className='video-content'>
                        <h3>This is a title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur
                        {
                             !read &&
                            <span className='read' onClick={()=>setRead(true)}> Read more</span>
                        }
                           {
                            read &&
                             <span>adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</span>
              
                           }
                         </p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12'>
                <video width='100%' controls>
                    <source src={video} type="video/mp4"/>
                    </video>
                    <div className='video-content'>
                        <h3>This is a title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur                    {
                             !read2 &&
                            <span className='read' onClick={()=>setRead2(true)}> Read more</span>
                        }
                           {
                            read2 &&
                             <span>adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</span>
              
                           }</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12'>
                <video width='100%' controls>
                    <source src={video} type="video/mp4"/>
                    </video>
                    <div className='video-content'>
                        <h3>This is a title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur                    {
                             !read3 &&
                            <span className='read' onClick={()=>setRead3(true)}> Read more</span>
                        }
                           {
                            read3 &&
                             <span>adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</span>
              
                           }</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12'>
                <video width='100%' controls>
                    <source src={video} type="video/mp4"/>
                    </video>
                    <div className='video-content'>
                        <h3>This is a title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur                    {
                             !read4 &&
                            <span className='read' onClick={()=>setRead4(true)}> Read more</span>
                        }
                           {
                            read4 &&
                             <span>adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</span>
              
                           }</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12'>
                <video width='100%' controls>
                    <source src={video} type="video/mp4"/>
                    </video>
                    <div className='video-content'>
                        <h3>This is a title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur                    {
                             !read5 &&
                            <span className='read' onClick={()=>setRead5(true)}> Read more</span>
                        }
                           {
                            read5 &&
                             <span>adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</span>
              
                           }</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12'>
                <video width='100%' controls>
                    <source src={video} type="video/mp4"/>
                    </video>
                    <div className='video-content'>
                        <h3>This is a title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur                    {
                             !read6 &&
                            <span className='read' onClick={()=>setRead6(true)}> Read more</span>
                        }
                           {
                            read6 &&
                             <span>adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</span>
              
                           }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItsWork;
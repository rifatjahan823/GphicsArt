import React, { useState } from 'react';
import logo from '../../../Image/home/gphics-logo-1.png';
import { Carousel } from 'react-bootstrap';
import banner from '../../../Image/home/banner-scaled.jpg';
import './Sidebar.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import logoslide1 from '../../../Image/home/logo-slide-1.png';
import logoslide2 from '../../../Image/home/logo-slide-2.png';
import logoslide3 from '../../../Image/home/logo-slide-3.png';
import logoslide4 from '../../../Image/home/logo-slide-4.png';
import logoslide5 from '../../../Image/home/logo-slide-5.png';
import logoslide6 from '../../../Image/home/logo-slide-6.png';
import 'swiper/css';
import { Typewriter } from 'react-simple-typewriter';


const Sidebar = () => {
    // ----fore type writer----------
   const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }
//    -------------for slider---------   
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className='container-fluid px-4'>
            <div className='home'>
                <div className='row g-4'>
                    <div className='col-md-4 col-12'>
                        {/* ---------------logo-------------- */}
                        <div className='sidebar border'>
                            <div className='sidebar-logo'>
                                <img style={{width:'150px',}} className='img-fluid  mx-auto d-block' src={logo} alt="" />
                            </div>
                            {/* -----------------logo-bottom-content---------- */}
                            <div className='logo-bottom-content text-center'>
                                <h3>Gphics Art Studio</h3>
                                <p>Your Brand Builder</p>
                                <div className='sidebar-btn'>
                                <button className='btn'>contact us</button>
                                </div>
                            </div>
                            {/* -----------------logo-description--------- */}
                            <div className='description'>
                                <h6>Description</h6>
                                <p>Hi, Welcome to graphics Art Studio. We are graphics designer and brand identity expert with great creative skills. Please place your order to get exactly what you are look after. Thanks..</p>
                                <h6>Language</h6>
                                <p>English, Bangla, Spanish, Hindi, Arbi</p>
                            </div>
                        </div>
                    </div>
                    {/* -------service-area------------- */}
                    <div className='col-md-8 col-12'>
                        <div className='services'>
                            <p className='border'>Our Services</p>
                            <div className='service mt-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eum, earum odit aliquid ratione dolor vero nesciunt a beatae debitis voluptatibus harum facilis sint incidunt, aperiam maxime eius sequi libero, non reprehenderit porro hic. Error porro in, veritatis ab illum optio neque molestias repellendus labore, fugiat aut illo minus laboriosam.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eum, earum odit aliquid ratione dolor vero nesciunt a beatae debitis voluptatibus harum facilis sint incidunt, aperiam maxime eius sequi libero, non reprehenderit porro hic. Error porro in, veritatis ab illum optio neque molestias repellendus labore, fugiat aut illo minus laboriosam.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eum, earum odit aliquid ratione dolor vero nesciunt a beatae debitis voluptatibus harum facilis sint incidunt, aperiam maxime eius sequi libero, non reprehenderit porro hic. Error porro in, veritatis ab illum optio neque molestias repellendus labore, fugiat aut illo minus laboriosam.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eum, earum odit aliquid ratione dolor vero nesciunt a beatae debitis voluptatibus harum facilis sint incidunt, aperiam maxime eius sequi libero, non reprehenderit porro hic. Error porro in, veritatis ab illum optio neque molestias repellendus labore, fugiat aut illo minus laboriosam.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eum, earum odit aliquid ratione dolor vero nesciunt a beatae debitis voluptatibus harum facilis sint incidunt, aperiam maxime eius sequi libero, non reprehenderit porro hic. Error porro in, veritatis ab illum optio neque molestias repellendus labore, fugiat aut illo minus laboriosam.
                            </div>
                            <div className='mt-1' style={{borderTop:'10px solid white',}}></div>
                        </div>
                        {/* -------carusel-area------------- */}
                        <div className='carusel'>
                             <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img style={{width:"100%",height:"240px",}} src={banner } alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                               <img style={{width:"100%",height:"240px",}} src={banner } alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                               <img style={{width:"100%",height:"240px",}} src={banner } alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                               <img style={{width:"100%",height:"240px",}} src={banner } alt="" />
                            </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
             {/* ------------logo-slider--------- */}
            <div class="row mt-4 "style={{padding:"0 13px"}}>
             <div class="col-md-4 col-12 logo-slider-content ">
                <p className='text-center text-white'>Our {' '}<Typewriter
                    words={['Respacted Clients']}
                    loop={Infinity}
                    cursor
                    cursorStyle=''
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                
                /></p>
            </div>
             <div class="col-md-8 col-12 logo-slider-logo ">
                <div className='slide-logo px-4 py-3'>
                {/* ---------for desktop--------- */}
                <Swiper className='d-none d-lg-block'
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[ Autoplay]}
                        navigation
                        loop={true}
                        autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                    <SwiperSlide ><img src={logoslide1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logoslide2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logoslide3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logoslide4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logoslide5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logoslide6} alt="" /></SwiperSlide>
                    </Swiper>
                {/* ---------for tab--------- */}
                <Swiper className='d-none d-lg-none d-md-block'
                    spaceBetween={50}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[ Autoplay]}
                        navigation
                        loop={true}
                        autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                    <SwiperSlide ><img src={logoslide1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logoslide2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logoslide3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logoslide4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logoslide5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logoslide6} alt="" /></SwiperSlide>
                    </Swiper>
                {/* ---------for mobile--------- */}
                <Swiper className='d-block d-md-none'
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[ Autoplay]}
                        navigation
                        loop={true}
                        autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                    <SwiperSlide ><img src={logoslide1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logoslide2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logoslide3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logoslide4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logoslide5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logoslide6} alt="" /></SwiperSlide>
                    </Swiper>
                 </div>
              </div>
             </div>
            </div>
        </div>
    );
};

export default Sidebar;
import React, { useState } from 'react';
import logo from '../../../Image/home/gphics-logo-1.png';
import { Carousel } from 'react-bootstrap';
import banner from '../../../Image/home/banner-scaled.jpg';
import './Sidebar.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';

const Sidebar = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className='container'>
            <div className='home'>
                <div className='row g-4'>
                    <div className='col-md-4 col-12'>
                        {/* ---------------logo-------------- */}
                        <div className='sidebar border'>
                            <div className='logo'>
                                <img style={{width:'150px'}} className='img-fluid  mx-auto d-block' src={logo} alt="" />
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
                            <div className='mt-1' style={{borderTop:'10px solid white',marginRight:'20px'}}></div>
                        </div>
                        {/* -------carusel-area------------- */}
                        <div className='carusel'>
                             <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img style={{width:"97.3%",height:"200px",}} src={banner } alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                               <img style={{width:"97.3%",height:"200px",}} src={banner } alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                               <img style={{width:"97.3%",height:"200px",}} src={banner } alt="" />
                            </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
             {/* ------------logo-slider--------- */}
            <div class="row mt-4"style={{paddingLeft:"13px",paddingRight:'25px'}}>
             <div class="col-4  logo-slider-content ">
             One of three columns
            </div>
             <div class="col-8 logo-slider-logo ">
                <div className='slide-logo'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[ Autoplay]}
                        navigation
                        loop={true}
                        autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                    <SwiperSlide >Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    </Swiper>
                 </div>
              </div>
             </div>
            </div>
        </div>
    );
};

export default Sidebar;
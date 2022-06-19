import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from './CustomLink/CustomLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter,faEraser } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  return (
    <div className='container'>
          <div className='row align-items-start py-5'>
        <div className='col-lg-4 col-md-5 col-12 mb-4'>
            <div className='border pb-4 ' >
             <div className='row border-bottom pt-3 mb-4 px-3' style={{margin:"0 0px",fontWeight:'500'}}>
                <div className='col-6'>
                    <p><FontAwesomeIcon className='icon' icon={faFilter} /> Filter</p>
                </div>
                <div className='col-6 text-end '>
                  <p><FontAwesomeIcon className='icon' icon={faEraser} /> Clear </p>
                </div>
              </div> 
            <li className='list-unstyled pb-3 ps-4'> <CustomLink  to="logo">Logo Design</CustomLink ></li>
            <li className='list-unstyled pb-3 ps-4'> <CustomLink  to="flat">Flat & Minimalist Logo Design</CustomLink ></li>
            <li className='list-unstyled pb-3 ps-4'> <CustomLink  to="moscot">Mascot Logo Design </CustomLink ></li>
            <li className='list-unstyled pb-3 ps-4'> <CustomLink  to="bisiness">Bisiness Card And Stationary </CustomLink ></li>
            {/* ---------------Fiyer Design T-shart Design------------ */}
              <div className='d-flex'>
              <li className='list-unstyled mb-3 ps-4'> <CustomLink to="fiyer">Fiyer Design</CustomLink> </li>
               <li className='list-unstyled mb-3 ps-2'> <CustomLink to="tshirt">T-shart Design</CustomLink> </li>
              </div>
            {/* ---------------Data EntryT-shart Design------------ */}
              <div className='d-flex'>
              <li className='list-unstyled mb-3 ps-4'> <CustomLink to="dataentry">Data Entry</CustomLink> </li>
               <li className='list-unstyled mb-3 ps-2'> <CustomLink to="digital">Digital Marketing</CustomLink> </li>
              </div>
              <li className='list-unstyled mb-3 ps-4'> <CustomLink  to="photo">Photo Background Remove </CustomLink ></li>
              <li className='list-unstyled mb-3 ps-4'> <CustomLink  to="ux">Ui/ UX Design </CustomLink ></li>
              <li className='list-unstyled  ps-4'> <CustomLink  to="website">Website Design & Deveiopment </CustomLink ></li>
            </div>
        </div>
      <div className='col-md-7 col-lg-8 col-12 '>
          <h1 className='text-center mb-4' style={{background:"#1CBC71",color:"white",padding:'10px 0'}}>PORTFOLIO</h1>
          <Outlet></Outlet>
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
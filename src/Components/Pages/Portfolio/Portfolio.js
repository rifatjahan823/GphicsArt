import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className='container'>
<div >      <Link to="logo">logo</Link></div>


    <div >  <Outlet></Outlet></div>
    </div>
  );
};

export default Portfolio;
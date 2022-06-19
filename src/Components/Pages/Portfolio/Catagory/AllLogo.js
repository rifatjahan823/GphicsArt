import React from 'react';
import Details from '../Details/Details';
import useLogo from '../Hooks/useLogo';

const AllLogo = () => {
    const logo =useLogo('https://raw.githubusercontent.com/rifatjahan823/GphicsArt/main/public/logos.json');
    return (
        <div>
           <div className='row g-4'>
           {
               logo.map(logo=><Details
                logo={logo}
               key={logo.id}
               ></Details>)
           }
         </div> 
        </div>)
};

export default AllLogo;
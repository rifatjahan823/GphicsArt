import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';

const Logo = () => {
    const [logos,setLogos]=useState([]);
    useEffect(()=>{
        fetch('logos.json')
        .then(res=>res.json())
        .then(data=>setLogos(data))
    },[])
    console.log(logos)
    return (
        <div>
            {
               logos.map(logos=><Details
                logos={logos}
               key={logos.id}
               ></Details>)
           }
        </div>
    );
};

export default Logo;
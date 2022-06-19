import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';

const AllLogo = () => {
    const [logos,setLogos]=useState([]);
    useEffect(()=>{
        fetch('logos.json')
        .then(res=>res.json())
        .then(data=>setLogos(data))
    },[])
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

export default AllLogo;

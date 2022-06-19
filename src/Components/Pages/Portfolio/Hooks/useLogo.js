import React, { useEffect, useState } from 'react';

const useLogo = (url) => {
    const [logos,setLogos]=useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setLogos(data))
    },[])

    return logos;
};

export default useLogo;
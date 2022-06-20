import React from 'react';

const Loading = () => {
    return (
        <div>
         <div className='vh-100 justify-center items-center'>
            {/* <button className="btn btn-square loading "></button> */}
            <img className='img-fluid mx-auto d-block' src="https://assets-blog.lottiefiles.dev/2021/03/CoMw0bhvYXrDGN6ZDTOWmFAfoIWWR8VxEIAzq9r8.gif" alt="" />
        </div> 
        </div>
    );
};

export default Loading;
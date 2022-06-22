import React, { useEffect } from 'react';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../../firebase.init';
import Loading from '../../Loading/Loading';
import facebook from '../../../../Image/social/facebook.jpg'

const Facebook = () => {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error ) {
        errorElement=
          <div>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>
      }
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";
      useEffect(()=>{
        if(user){
            navigate(from, { replace: true });
    }
    },[from,navigate]);
    
    if (loading ) {
        return <Loading></Loading>;
      };
    return (
        <div className='mt-2 '>
        <div>
            { errorElement}
            <button className='border sign-btn fb-btn text-start' onClick={() => signInWithFacebook()} >
               <img style={{width:"6%",border:"none",marginRight:"30px",borderRadius:"50%"}}src={facebook} alt="" />
               Continue with Facebook
            </button>
        </div>
        <div className='d-flex align-items-center mb-1' style={{}}>
            <div style={{height:"1px",backgroundColor:"#e4e5e7"}} className=' w-50'></div>
            <p style={{color:'#62646A'}} className='mx-2 mt-3 fw-bold'>OR</p>
            <div style={{height:"1px",backgroundColor:"#e4e5e7"}} className='w-50'></div>
        </div>
    </div>
    );
};

export default Facebook;
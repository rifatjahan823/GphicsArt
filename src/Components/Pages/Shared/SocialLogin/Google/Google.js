import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../../firebase.init';
import Loading from '../../Loading/Loading';
import googles from '../../../../Image/social/google-icon-logo.png';

const Google = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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
        <div className=' '>
        <div>
            { errorElement}
            <button className='btn' onClick={() => signInWithGoogle()} >
                <img style={{width:"10%",margin:"0 auto",border:"none"}} className=" " src={googles} alt="" />
            </button>
        </div>
        <div className='d-flex align-items-center' style={{marginTop:"-15px"}}>
            <div style={{height:"1px",backgroundColor:"black"}} className=' w-50'></div>
            <p className='mx-2 mt-2'>or</p>
            <div style={{height:"1px",backgroundColor:"black"}} className='w-50'></div>
        </div>
    </div>
    );
};

export default Google;
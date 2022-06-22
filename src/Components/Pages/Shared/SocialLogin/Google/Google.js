import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../../firebase.init';
import Loading from '../../Loading/Loading';
import googles from '../../../../Image/social/google-icon-logo.png';
import '../Common.css'

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
        <div className='mt-4 '>
        <div>
            { errorElement}
            <button className='border sign-btn text-start' onClick={() => signInWithGoogle()} >
               <img style={{width:"7%",border:"none",marginRight:"30px"}}src={googles} alt="" />
               Continue with Google
            </button>
        </div>
   
    </div>
    );
};

export default Google;
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignIn.css'
import auth from '../../../../firebase.init';
import Loading from '../Loading/Loading';
import Google from '../SocialLogin/Google/Google';
import Facebook from '../SocialLogin/Facebook/Facebook';
import { toast } from 'react-toastify';

const SignIn = () => {
           //login
           const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useSignInWithEmailAndPassword(auth); 
          //reset password
          const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
            auth
            );
      //for from
      const navigate = useNavigate()
      const { register, formState: { errors }, handleSubmit } = useForm();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";
      // Submit your data into Redux store
      const onSubmit = data =>{
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
      }; 
      useEffect(()=>{
         if(user){
             navigate(from, { replace: true });
           }
      },[from, navigate])
      if(loading){
        return <Loading></Loading>
      }
      if(sending){
        return <Loading></Loading>;
      }
    return (
        <div className='container'>
            <div className='mx-auto form-container '>
                <div className='text-center signin-title'>
                  <h3>Login with</h3>
                  <h5>Gphics Art Studio</h5>
               </div>
            {/* -------social-login------------ */}
                <div>
                    <Google></Google>
                    <Facebook></Facebook>
                </div>
        {/* --------------form part-----------     */}
             <form style={{marginTop:"-12px"}} onSubmit={handleSubmit(onSubmit)}>    
                <div className="">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"{...register("email", {
                    required:{
                       value:true,
                       message:'Please Give Email' 
                    },
                    pattern:{
                    value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message:'Privide  a Valid Email'
                }
                })}/>
                <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-danger">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-danger">{errors.email.message}</span>}
                </label>
                </div>
                {/* ----------------password--------------- */}
                <div className="">
                <label for="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Password"{...register("password", {
                    required:{
                       value:true,
                       message:'Please Give password' 
                    },
                    minLength:{
                    value:6,
                    message:'Must be 6 Characters or longer'
                }
                })}/>
                <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-danger">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-danger">{errors.password.message}</span>}
                </label>
                </div>

            {
                error?.message  && <p className='text-danger'>{error.message}</p>
            }
            {
                error1?.message  && <p>{error1.message}</p>
            }
            <p>Forget Password?<Link to="" className=" pe-auto fw-bold text-decoration-none" style={{color:"#36B772"}}onClick={async (data) => {
              if(data.email){
              await sendPasswordResetEmail();
              toast('Sent email');
             }else{
              toast('plese enter your email'); 
             }
             }}>Reset Password</Link></p>
              <input className=' common-button mb-3' type="submit" value="Login"/>
            </form>  
            <p >New to here? <Link style={{color:"#36B772"}} to="/signup" className="pe-auto fw-bold">Please Register</Link></p>
          </div>
        </div>
    );
};

export default SignIn;
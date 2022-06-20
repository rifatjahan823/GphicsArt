import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignIn.css'
import auth from '../../../../firebase.init';
import Loading from '../Loading/Loading';
import Google from '../SocialLogin/Google/Google';
import logo from '../../../Image/home/logo.png'


const SignIn = () => {
           //login
           const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useSignInWithEmailAndPassword(auth); 
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
    
    return (
        <div className='container'>
            <div className='mx-auto form-container px-3'>
                <div className='d-flex align-items-center justify-content-center login-title'>
                <div><h3><span style={{color:"#36B772"}}>Register</span> with</h3></div>
                <div><img className='img-fluid' src={logo} alt="" /></div>
               </div>
            {/* -------social-login------------ */}
                <div>
                    <Google></Google>
                </div>
        {/* --------------form part-----------     */}
             <form onSubmit={handleSubmit(onSubmit)}>    
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

            <input className='common-button mb-3' type="submit" vale="Login" />
            </form>  
            <p >Already have an account? <Link style={{color:"#36B772"}} to="/signup" className="pe-auto fw-bold">Please Register</Link></p>
          </div>
        </div>
    );
};

export default SignIn;
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Loading from '../Loading/Loading';
import logo from '../../../Image/home/logo.png'
import './signUp.css'
import Google from '../SocialLogin/Google/Google';

const SignUp = () => {
        //SignUp
        const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
        ] = useCreateUserWithEmailAndPassword(auth);
        //update user profile
        const [updateProfile, updating, updateerror]=useUpdateProfile(auth);
        const navigate = useNavigate();

        //for from
        const { register, formState: { errors }, handleSubmit } = useForm();
        // Submit your data into Redux store
        const onSubmit =async data =>{
        console.log(data.name)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName:data.name });
        }; 
        if(loading ||updating){
        return <Loading></Loading>
        } 
return (
       <div className='container'>
        <div className='mx-auto form-container'>
        <div className='d-flex align-items-center justify-content-center login-title'>
        <div><h3><span style={{color:"#36B772"}}>Register</span> with</h3></div>
        <div><img className='img-fluid' src={logo} alt="" /></div>
      </div>
      {/* -------social-login------------ */}
        <div>
            <Google></Google>
        </div>
      <form style={{marginTop:"-16px"}} onSubmit={handleSubmit(onSubmit)}>     
    {/* ----------------Name--------------- */}
        <div className="">
        <label for="inputName" className="form-label">Name</label>
        <input type="text" className="form-control" id="inputName" placeholder="name"{...register("name",{
                required:{
                 value:true,
                 message:'Please Give Name' 
                 },
             })}/>
           <label className="label">
             {errors.name?.type === 'required' && <span className="label-text-alt text-danger">{errors.name.message}</span>}
             </label>
             </div>    
        {/* ----------------Email--------------- */}
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
            updateerror?.message  && <p className='text-red-500'>{updateerror.message}</p>
         }

        <input className=' common-button mb-3' type="submit" value="Register" />
         </form>
         <p >Already have an account? <Link style={{color:"#36B772"}} to="/signin" className="pe-auto fw-bold">Please Login</Link></p>
               
        </div>
    </div>
   )
};

export default SignUp;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook,faEnvelope,faPhone,faMapMarker } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import { useForm } from 'react-hook-form';
import Map from '../../MapApi/Map';

const Contact = () => {     
         //for from
 const { register, formState: { errors }, handleSubmit }=useForm();
    return (
        <div className='container-fluid px-4'>
            <div className='contact-area'>
                {/* -----------contact------------ */}
                <div className='contact text-center py-5 my-5'>
                    <div className='row g-4 align-items-center justify-content-center'>
                        <div className='col-lg-3 col-md-6 col-12'>
                        <FontAwesomeIcon className='contact-icon' icon={faAddressBook} />
                            <h2>Address</h2>
                            <p>328 Queensberry Street, North Melbourne VIC 3051</p>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                        <FontAwesomeIcon className='contact-icon' icon={faEnvelope} />
                            <h2>Email</h2>
                            <p>example@emailaddr.com</p>
                            <p>another@email.com</p>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                        <FontAwesomeIcon className='contact-icon' icon={faPhone} />
                            <h2>Conatct</h2>
                            <p>+1-202-555-0105</p>
                            <p>+1-202-555-01</p>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                        <FontAwesomeIcon className='contact-icon' icon={faMapMarker} />
                            <h2>Location</h2>
                            <p>328 Queensberry Street, North Melbourne VIC 3051</p>
                        </div>
                    </div>
                </div>
             {/* -----------form----------- */}
             <div className='form border p-4 mb-3 '>
                <h1>Contact Form</h1>
            <form onSubmit={handleSubmit()}> 
            <div className='row'>  
        {/* ----------------Name--------------- */}
            <div className="col-md-6 col-12 mb-4">
               <label for="inputName" className="form-label">Name</label>
                 <input type="text" className="form-control" id="inputName" placeholder=" Name"{...register("name",{
                 })}/>
            </div>     
            {/* ----------------Email-------------- */}
            <div className="col-md-6 col-12 mb-4">
                 <label for="inputName"className="form-label">Email</label>
                   <input type="text"  className="form-control" id="inputName" placeholder="email"{...register("email",{
                 })}/>
               </div>           
            {/* ----------------country------------- */}
            <div className="col-md-6 col-12">
               <label for="inputName" className="form-label ">Country</label>
                <select className="form-select form-control" id="inputName" placeholder="Country"{...register("country",{
                    required:{
                     value:true,
                     message:'Please Choose Location' 
                     },
                 })}>
                    <option value="20">10</option>
                    <option value="30">30</option>
                </select>
                  <label className="label">
                 {errors.country?.type === 'required' && <span className="label-text-alt text-danger">{errors.country.message}</span>}
                 </label>
            </div>
            {/* ----------------Phone Number-------------- */}
            <div className="col-md-6 col-12">
                <label for="inputName" className="form-label">Phone Number</label>
                <select className="form-select form-control" id="inputName" placeholder="Phone Number"{...register("phone",{
                    required:{
                     value:true,
                     message:'Please Select Your Phone Number' 
                     },
                 })}>
                    <option value="20">10</option>
                    <option value="30">30</option>
                </select>
                  <label className="label">
                 {errors.phone?.type === 'required' && <span className="label-text-alt text-danger">{errors.phone.message}</span>}
                 </label>
                 </div>
            {/* ----------------Description--------------- */}
            <div className="mb-4">
                <label for="inputName" className="form-label">Describe the service you’re looking to purchase.</label>
                 <textarea type="text"rows="6" cols="60" className="form-control" id="inputName" placeholder="Write about what are you looking to purchase"{...register("description",)}/>
                 </div>
            {/* ----------------Budgate--------------- */}
            <div className="col-md-6 col-12">
                <label for="inputName" className="form-label">What is your budget for this service?</label>
                 <input type="number" className="form-control" id="inputName" placeholder="$ Amount"{...register("budgate",{
                    required:{
                     value:true,
                     message:'Please Give Amount' 
                     },
                 })}/>
                 <label className="label">
                 {errors.budgate?.type === 'required' && <span className="label-text-alt text-danger">{errors.budgate.message}</span>}
                 </label>
                 </div>
            {/* ----------------Budgate--------------- */}
             <div className="col-md-6 col-12">
                <label for="inputName" className="form-label">What is your budget for this service?</label>
                 <input type="number" className="form-control" id="inputName" placeholder="$ Amount"{...register("budgate",{
                    required:{
                     value:true,
                     message:'Please Give Amount' 
                     },
                 })}/>
                 <label className="label">
                 {errors.budgate?.type === 'required' && <span className="label-text-alt text-danger">{errors.budgate.message}</span>}
                 </label>
                 </div>
             <input className=' contact-btn btn mb-3' type="submit" value="Submit" />
             </div>  
             </form>
             </div>
             {/* ----------------Map-------------- */}
             <div className='map py-3 '>
                 <Map></Map>
             </div>
            </div>
        </div>
    );
};

export default Contact;
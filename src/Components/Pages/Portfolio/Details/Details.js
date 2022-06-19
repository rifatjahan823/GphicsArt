import React from 'react';
import './Details.css'

const Details = ({logo}) => {
    const {strMealThumb,strMeal,design}=logo
    return (
         <div className='card-group col-lg-6 col-md-6 col-sm-12 '>
           <div className='logoDetails text-center'>
            <img className='img-fluid  mx-auto d-block' src={strMealThumb} alt="" />
            <div className='content'>
                <h6>Name:{strMeal}</h6>
                <div className='row'>
                    <div className='col-8'>
                        <p>{design}</p>
                    </div>
                    <div className='col-4 text-end'>
                        <p>l</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Details;
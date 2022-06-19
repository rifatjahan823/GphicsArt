import React from 'react';

const Details = ({logos}) => {
    const {id}=logos
    return (
         <div className='card-group col-lg-6 col-md-6 col-sm-12 '>
           <div className='FoodsDetails '>
            <div className='content'>
                <h6>Name:{id}</h6>
                <div className='row'>

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
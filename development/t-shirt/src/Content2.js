import React, { useState } from 'react'
import { ApiNew } from './ContectApiwomen';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Content2() {
    const [state, setstate] = useState(ApiNew);
   const navi = useNavigate();
    return (
        <div>
            <div className='text-center my-5'>
            <h1 className='sf-2 fw-bold'>New Drops</h1>
         </div>

            <div className='container'>
                <div className='row text-center'>
                    {
                        state && state.map((v) => (
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 my-3' key={v.id} onClick={()=>{navi("/new/"+v.id)}}>
                                <img src={v.url} alt="" />
                                <p>I'm a product</p>
                                <p>$15.00</p>
                            </div>
                        ))
                    }

                </div>

            </div>
            <div className='text-center my-4'>
        <Link to={"/new"} className='btn btn-success px-5' >Shop New</Link>
        </div>
      
        </div>
    )
}

export default Content2 ;

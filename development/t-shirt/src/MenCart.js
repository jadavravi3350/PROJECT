import React, { useState } from 'react'
import { ApiMen } from './ContectApiwomen';
import { useNavigate } from 'react-router';

function MenCart() {
    const [state, setstate] = useState(ApiMen);
   const navi = useNavigate();
    return (
        <div>
            <div className='container'>
                <h1 style={{ fontSize: "60px" }} className='my-5 fw-bold'>Men</h1>
                <p className='my-5'>8 products</p>
            </div>

            <div className='container'>
                <div className='row text-center'>
                    {
                        state && state.map((v) => (
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 my-3' key={v.id} onClick={()=>{navi("/men/"+v.id)}}>
                                <img src={v.url} alt="" />
                                <p>I'm a product</p>
                                <p>$15.00</p>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default MenCart ;

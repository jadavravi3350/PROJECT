import React from 'react'
import { Link } from 'react-router-dom'

function ContactUs() {
    return (
        <div>

            <div id='ravi' className='d-flex  justify-content-center'>

                <div className='col-12 col-lg-9'>

                    <h6 className='my-5 text-center text-lg-start'><Link to={"/"}>Home</Link> > Media</h6>

                    <div className='d-flex flex-wrap'>

                        <div className='col-12 col-lg border p-3'>

                            <h2 className='my-5'>Contacts</h2>

                            <form className='row row-gap-4'>
                                <div>
                                    <label for="" className='fs-5'>First name:*</label><br />
                                    <input className='form-control p-2 fs-5 rounded-0 border-0 ' type="text" />
                                </div>

                                <div>
                                    <label for="" className='fs-5'>Last name:*</label><br />
                                    <input className='form-control p-2 fs-5 rounded-0 border-0 ' type="text" />
                                </div>

                                <div>
                                    <label for="" className='fs-5'>Email:*</label><br />
                                    <input className='form-control p-2 fs-5 rounded-0 border-0 ' type="text" />
                                </div>

                                <div>
                                    <label for="" className='fs-5'>Phone number:*</label><br />
                                    <input className='form-control p-2 fs-5 rounded-0 border-0 ' type="text" />
                                </div>

                                <div>
                                    <label for="" className='fs-5'>Subject:*</label><br />
                                    <input className='form-control p-2 fs-5 rounded-0 border-0 ' type="text" />
                                </div>

                                <div>
                                    <label for="" className='fs-5'>Message:*</label><br />
                                    <textarea className="form-control p-2 fs-5 rounded-0 border-0 " id="exampleFormControlTextarea1" rows="4"></textarea>
                                </div>

                                <button className='btn btn-info '>Send</button>
                            </form>
                        </div>

                        <div className='col-12  col-lg text-center'>
                            <img className='img-fluid' src="https://static.wixstatic.com/media/1a6021_7cc2d04551b949039f0c80f1cb3e3e43~mv2.png/v1/fill/w_435,h_1130,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/3D_Aluminum_Bottle_FrontOnly_Smith.png" alt="" />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ContactUs

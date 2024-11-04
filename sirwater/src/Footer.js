import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            {/* footer start */}

            <footer className=' bg-black text-light'>

                <div className=' d-flex justify-content-center pt-5'>

                    <div className='row col-12 col-lg-8 '>
                        <div className='col-12 col-lg'>
                            <h3 className='py-3'>Because water should be free</h3>
                            <p className='fs-5'>Help us spread the word and share our movement with your friends and family</p>
                            <Link to={"/ContactUs"} className='btn btn-info' >Contact Us →</Link>
                            <div className='row py-5'>

                                <h6 className='col-6'>Contact</h6>
                                <h6 className='col-6'>  <Link className=' text-light' to={"/Advertise"}>Order FreeNeer Boxes </Link></h6>
                                <h6 className='col-6'>Projects</h6>
                                <h6 className='col-6'>  <Link className=' text-light' to={"/Advertise"}>Order FreeNeer Bottles</Link> </h6>

                                <h6 className='my-3'>Shop Apparel</h6>

                            </div>



                        </div>

                        <div className='col-12 col-lg d-flex justify-content-center justify-content-lg-end align-items-end '>

                            <div className='fs-3'>

                                <div className='d-flex justify-content-evenly gap-3  py-2'>

                                    <a href="https://www.tiktok.com/login"><i className="fab fa-tiktok text-light"></i></a>
                                    <a href="https://www.instagram.com/accounts/login/"><i className="fab fa-instagram text-light"></i></a>
                                    <a href="https://www.facebook.com/login/"><i className="fab fa-facebook text-light"></i></a>
                                    <a href="https://x.com/i/flow/login"><i className="fab fa-twitter text-light"></i></a>

                                </div>
                                <div className='d-flex justify-content-evenly gap-3  py-2'>

                                    <a href="https://www.youtube.com/account"> <i className="fab fa-youtube text-light"></i></a>
                                    <a href="https://discord.com/invite/rfAUWdUWrU"><i className="fab fa-discord text-light"></i></a>
                                    <a href="https://www.reddit.com/r/FreeWater_io/?rdt=63660" className='text-center'><img className='w-75' src="https://static.wixstatic.com/media/11062b_b8c53c43b01c454683b99c6034d0425c~mv2.png/v1/fill/w_38,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_b8c53c43b01c454683b99c6034d0425c~mv2.png" alt="" />                                    </a>
                                    <a href="https://www.linkedin.com/login"> <i className="fab fa-linkedin-in text-light"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className='text-center py-5'>© 2024  Copyright FreeNeer All Rights Reserved</p>

            </footer>

            {/* footer end */}
        </div>
    )
}

export default Footer;

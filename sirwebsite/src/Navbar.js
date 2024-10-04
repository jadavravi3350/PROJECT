import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>

            <nav style={{ background: "black" }} className='text-white'>

                <div className='container-fluid p-5 d-flex justify-content-between align-items-center'>

                    <div className=''>
                        <img className='w-75' src="https://static.wixstatic.com/media/79ba6e_97801df714ce40c4a92a1fefbb64352e~mv2.png/v1/crop/x_0,y_75,w_2364,h_2213/fill/w_176,h_165,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logomark%20white.png" alt="" />
                    </div>

                    <div className=' d-none d-lg-flex gap-5'>
                        <button className='btn fw-bold' style={{ color: "#1CBA1D" }}>HOME</button>
                        <Link to={"/Advertise"} className='btn text-white fw-bold'>ADVERTISE</Link>
                        <button className='btn text-white fw-bold'>HOME</button>
                        <button className='btn text-white fw-bold'>HOME</button>
                        <button className='btn text-white fw-bold'>HOME</button>
                    </div>

                    <div className='d-block d-lg-none'>
                        <svg className='d-block d-lg-none bg-info' width={25} data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>

                        <div class="offcanvas offcanvas-top bg-dark text-white h-100" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                            <div class="offcanvas-header">
                                <h5 id="offcanvasTopLabel">Offcanvas top</h5>
                                <button type="button" class="btn-close text-reset text-bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body d-block">
                                ...RAVI JADAV
                            </div>
                        </div>

                    </div>

                </div>

            </nav>

        </div>
    )
}

export default Navbar

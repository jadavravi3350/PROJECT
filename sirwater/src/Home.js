import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            {/* section 1 start */}

            <section className='text-center my-5'>
                <p style={{ fontSize: "30px" }}>Put Your Brand In Everyone's Hand!</p>

                <Link to={"/Advertise"} className='btn btn-outline-dark rounded-0 py-2 px-5'>Advertise with us</Link><br />

                <img className=' object-fit-cover img-fluid col-12 col-lg-5' src="https://static.wixstatic.com/media/32b2bf_603e71b5d94244a28c3b2a9992c82b3b~mv2.png/v1/fill/w_750,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/FW_WebsiteBottles_Card_NBC_OTF_PNG.png" alt="" />

            </section>
            {/* section 1 end */}

            {/* section 2 start */}

            <section className='text-center my-5 d-flex justify-content-center'>

                <div className='row col-12 col-lg-6 my-5'>

                    <div className='col-12 col-xl-6 p-lg-5'>
                        <img className='img-fluid' src="https://static.wixstatic.com/media/bfcb9b_b49827742e3f4fd1b62d97bedd6e0d82~mv2.png/v1/fill/w_104,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png" alt="" />
                        <h5>Save Money</h5>
                        <p style={{ fontSize: "18px" }}>Bottled water costs 2,000 times the price of tap water</p>
                    </div>

                    <div className='col-12 col-xl-6  p-lg-5'>
                        <img className='img-fluid' src="https://static.wixstatic.com/media/bfcb9b_8428e536e2c84887be07349a8567d661~mv2.png/v1/fill/w_104,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png" alt="" />
                        <h5>Eco Friendly</h5>
                        <p style={{ fontSize: "18px" }}>Our goal is to be net positive by 2030</p>
                    </div>

                    <div className='col-12 col-xl-6 p-lg-5'>
                        <img className='img-fluid' src="https://static.wixstatic.com/media/bfcb9b_d86c93d475f044b98a98894752b2969b~mv2.png/v1/fill/w_104,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png" alt="" />
                        <h5>Premium Water</h5>
                        <p style={{ fontSize: "18px" }}>FreeNeer is natural spring water and all of our containers are BPA free</p>
                    </div>

                    <div className='col-12 col-xl-6 p-lg-5'>
                        <img className='img-fluid' src="https://static.wixstatic.com/media/bfcb9b_918f7ef38a0a42358efab157edf47c31~mv2.png/v1/fill/w_104,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png" alt="" />
                        <h5>Save Lives</h5>
                        <p style={{ fontSize: "18px" }}>Ten cents from each beverage is donated to charity to build water wells for people in need</p>
                    </div>

                </div>

            </section>

            {/* section 2 end */}

            {/* section 3 start */}

            <section className='my-5 d-flex justify-content-center'>

                <div className='row justify-content-center col-12 col-lg-7 my-lg-5 align-items-center'>

                    <div className='col-12 d-flex justify-content-center col-lg py-2'>

                        <video className='img-fluid' loop="loop" muted="muted" autoPlay="autoplay">

                            <source src='https://video.wixstatic.com/video/bfcb9b_7acc406637ce4727ad0391a8ef6b86fb/720p/mp4/file.mp4'></source>

                        </video>
                    </div>

                    <div className='col-12 col-lg-7 py-2'>
                        <p style={{ fontSize: "18px" }}>FreeNeer is an innovative advertising platform that utilizes free premium spring water as a new type of advertising medium while prioritizing philanthropy and sustainability. Ten cents from each beverage is donated to charity to <b>fight the global water crisis.</b> We only need 10% of Americans to choose FreeNeer to solve the global water crisis.</p>
                    </div>

                </div>

            </section>

            {/* section 3 end */}

            {/* section 4 start */}

            <section className='my-5 d-flex justify-content-center'>

                <div className='row col-12 col-lg-10 col-xxl-7 align-items-center  my-lg-5'>

                    <div className='col-12 col-lg-5 py-2'>
                        <h1 className='fw-bold'>We are partnered with WellAware</h1>
                        <p className='py-4'>We donate ten cents per beverage to WellAware, an Austin based non-profit that builds water wells in East Africa. Every 150 FreeNeer donates enough money to provide one person with a safe water source for the rest of their life.</p>
                        <button className='btn btn-outline-dark'>Learn More</button>
                    </div>

                    <div className='col-12 col-lg-7 py-2'>
                        <img className='w-100 object-fit-cover' src="https://static.wixstatic.com/media/bfcb9b_3c6cf264b29e49838779345fd1a18d20~mv2.webp/v1/fill/w_649,h_488,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/free-water-drinking-image-1.webp" alt="" />
                    </div>
                </div>

            </section>

            {/* section 4 end */}

            {/* section 5 start */}

            <section className='my-lg-5  d-flex justify-content-center'>

                <div className='row col-12 col-lg-7 align-items-center my-lg-5'>

                    <div className='col-12 col-lg-7 py-2'>
                        <img className='w-100 object-fit-cover' src="https://static.wixstatic.com/media/bfcb9b_54b4f8a74eee4e4295f957edee9217bd~mv2.webp/v1/fill/w_621,h_455,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/three-bottles-free-water.webp" alt="" />
                    </div>

                    <div className='col-12 col-lg-5 py-2'>
                        <h1 className='fw-bold'>We never use plastic bottles</h1>
                        <p className='py-4'>FreeNeer comes in aluminum bottles and paper cartons of natural spring water because we didn't want to make water free and do it in a plastic bottle.</p>
                    </div>


                </div>

            </section>

            {/* section 5 end */}

            {/* section 6 start */}

            <section className='d-flex justify-content-center py-lg-5'>
                <div className='col-12 col-lg-5 border p-3'>

                    <h2 className='my-5 fw-bold text-black'>Subscribe To Get Your FreeNeer</h2>

                    <form className='row row-gap-4'>
                        <div>
                            <label for="" className='fs-5'>First name: *</label><br />
                            <input className='form-control p-2 fs-5 rounded-0 border-0 ' type="text" />
                        </div>

                        <div>
                            <label for="" className='fs-5'>Last name: *</label><br />
                            <input className='form-control p-2 fs-5 rounded-0 border-0 ' type="text" />
                        </div>

                        <div>
                            <label for="" className='fs-5'>Email:*</label><br />
                            <input className='form-control p-2 fs-5 rounded-0 border-0 ' type="text" />
                        </div>

                        <div>
                            <label for="" className='fs-5'>City:*</label><br />
                            <input className='form-control p-2 fs-5 rounded-0 border-0 ' type="text" />
                        </div>

                        <button className='btn btn-info'>Send</button>
                    </form>
                </div>
            </section>

            {/* section 6 end */}
        </div>
    )
}

export default Home;

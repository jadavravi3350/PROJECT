import React from 'react'

function Home() {
    return (
        <div>
            {/* section 1 */}

            <section style={{ background: "black" }}>

                <div className='d-flex flex-wrap text-white container'>

                    <div className='col-12 col-lg-6 my-5'>
                        <h1 className="display-1 fw-bold pb-5 text-center text-lg-start" style={{ color: "#1CBA1D" }}>THE FUTURE OF ADVERTISING</h1>

                        <h2 className='fw-bolder my-5'>Why pay when you can <b className='' style={{ color: "#1CBA1D" }}>#DrinkFree.</b></h2>

                        <p style={{ fontSize: "18px" }} className='fw-bold'>In a crowded digital landscape where ad blindness and oversaturation are prevalent, we offer a unique, engaging, and personalized approach to connect with your audience. Our water bottle canvases and QR code integration set us apart. In a world where consumers are inundated with ads, Drinkfree offers a refreshing and unmissable way for brands to stand out and make a lasting impact. We're not just advertising; we're a brand's opportunity to be in every hand, delivering tailored messages and exclusive offers <b style={{ color: "#1CBA1D" }}>directly to consumers.</b></p>

                        <button style={{ padding: "10px 80px" }} type="button" class="btn btn-outline-success rounded-4 m-5 btn-lg">Large button</button>
                    </div>

                    <div className='col-12 col-lg-6 my-5'>
                        <img className='img-fluid' src="https://static.wixstatic.com/media/79ba6e_5001254e4d5d4c7eae01257e2fa9006a~mv2.jpg/v1/fill/w_899,h_1021,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/df-bannery_edited_edited_edited_edited_j.jpg" alt="" />
                    </div>

                </div>

            </section>

            {/* section 2 */}

            <section style={{ background: "" }}>

                <div className='d-flex flex-wrap '>

                    <div className='col-12 col-lg-6 my-5 p-5'>
                        <h1 className="display-5 fw-bold  text-center text-lg-start" >REVOLUTIONIZE ADVERTISING</h1>

                        <h1 className='display-5 fw-bold pb-5' style={{ color: "#1CBA1D" }}>YOUR BRAND, OUR  <br />  CANVAS</h1>

                        <p style={{ fontSize: "18px" }} className='fw-bold my-5'>We turned our bottles into canvases for a brand's message and offer everything for free to consumers. A simple scan of our QR code connects them to your brand's world, allowing you to reach your target audience directly and track real-time campaign performance.</p>

                    </div>

                    <div className='col-12 col-lg-6 my-5 '>
                        <img className='img-fluid' src="https://static.wixstatic.com/media/79ba6e_ba37cb740dd44199a81cb40e565e53c6~mv2.jpg/v1/fill/w_955,h_804,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/79ba6e_ba37cb740dd44199a81cb40e565e53c6~mv2.jpg" alt="" />
                    </div>

                </div>

            </section>

            {/* section 3 */}
            <section>
                <img className='w-100' src="https://static.wixstatic.com/media/79ba6e_f4116e10d46f40e5b6a273f535ca9400~mv2.png/v1/fill/w_1864,h_801,al_c,q_90,enc_auto/79ba6e_f4116e10d46f40e5b6a273f535ca9400~mv2.png" alt="" />
            </section>


            {/* section 4 */}
            <section>
                <img className='w-100' src="https://static.wixstatic.com/media/79ba6e_142791273fb34ea1b3b2be11b26acab5~mv2.png/v1/fill/w_1903,h_901,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/79ba6e_142791273fb34ea1b3b2be11b26acab5~mv2.png" alt="" />
            </section>

            {/* section 5 */}
            <section>
                <img className='w-100' src="https://static.wixstatic.com/media/79ba6e_757fddfaf3d2456db6b94069591ddd03~mv2.png/v1/fill/w_1764,h_1063,al_c,q_90,enc_auto/79ba6e_757fddfaf3d2456db6b94069591ddd03~mv2.png" alt="" />
            </section>

            {/* section 6 */}

            <section style={{ background: "" }}>

                <div className='d-flex flex-wrap '>

                    <div className='col-12 col-lg-6 my-5 p-5'>
                        <h1 className="display-3 fw-bold  text-center text-lg-start mb-5" >SOCIAL MISSION</h1>

                        <h1 className='fs-3 fw-bold pb-5' >With every advertisement campaign, we contribute to providing clean drinking water to an entire school in rural & urban India for a <b style={{ color: "#1CBA1D" }}>full year.</b> </h1>

                        <p className='fw-bold my-5'>
                            DrinkFree collaborates with NGOs to install clean water dispensers in government schools lacking safe drinking water, striving to ensure universal access to safe water for children's health and wellbeing.</p>

                    </div>

                    <div className='col-12 col-lg-6 my-5 '>
                        <img className='img-fluid' src="https://static.wixstatic.com/media/79ba6e_6f4a65fd67a642d08872ba07e26624a6~mv2.jpg/v1/fill/w_955,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/79ba6e_6f4a65fd67a642d08872ba07e26624a6~mv2.jpg" alt="" />
                    </div>

                </div>

            </section>

            {/* section 7 */}

            <section style={{ width: "100%", height: "400px" }} className="position-relative">

                <video style={{ width: "100%", height: "100%", objectFit: "cover" }} loop="loop" muted="muted" autoPlay="autoplay">

                    <source src='https://video.wixstatic.com/video/79ba6e_3dd62fcf0ebb459c84956c651550a9e2/720p/mp4/file.mp4'></source>

                </video>

                <div className='bg-dark text-white p-5 position-absolute col-12 col-lg-6  top-50 start-50 translate-middle' style={{ borderRadius: "60px 0 60px 0" }}>
                    <h2>
                        Subscribe to get updates about our services</h2>

                    <label for="">Enter your email here*</label>

                    <div className='row mb-4'>
                        <div className='col-12 col-lg-8'>
                            <input type="text" class=" form-control border-0 bg-dark text-white border-bottom" placeholder="First name"></input>
                        </div>
                        <button className='btn btn-success col-6 col-lg-4 my-2 my-lg-0 px-5 py-2 rounded-pill'>Sign Up</button>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Home

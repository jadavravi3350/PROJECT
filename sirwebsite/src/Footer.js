import React from 'react'

function Footer() {
    return (
        <div>
            <footer class="text-center text-lg-start text-light p-5" style={{ background: "black" }}>
                <section class="pt-5">
                    <div class="container text-center text-md-start">
                        <div class="row">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <img className='img-fluid m-auto mb-3' src="https://static.wixstatic.com/media/79ba6e_0a18e7dd5b1e4936b7fe54a157b2981d~mv2.jpg/v1/crop/x_161,y_257,w_691,h_652/fill/w_138,h_129,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DF%20logo%20mark%20NEW_edited.jpg" alt="" />
                                <h6 class="text-uppercase fs-3 fw-bold mb-4">
                                    Branding
                                    DRINK FREE ADVERTISING MEDIA
                                </h6>
                                <p className='fs-5'>
                                    For any questions please email
                                    info@thedrinkfree.com
                                </p>
                            </div>

                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 fs-5 fw-bold">
                                <h4 class="text-uppercase fw-bold mb-4">
                                    Quick Links
                                </h4>
                                <p>
                                    <a href="#!" class="text-reset nav-link  ">Home</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset nav-link">Contact Us</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset nav-link">Blog</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset nav-link">About</a>
                                </p>

                                <p>
                                    <a href="#!" class="text-reset nav-link">Distribute</a>
                                </p>

                                <p>
                                    <a href="#!" class="text-reset">Privacy Policy
                                    </a>
                                </p>
                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 fs-5 fw-bold">
                                <h4 class="text-uppercase fw-bold mb-4">
                                    Contact Us
                                </h4>
                                <p>
                                    <a href="#!" class="text-reset nav-link">+91- 9871169694</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset nav-link">+91-9999445799</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset nav-link">+91-11-40071346</a>
                                </p>

                                <div className='d-flex justify-content-center justify-content-lg-start gap-4 my-5'>

                                    <i class="fab fa-instagram fs-5"></i>
                                    <i class="fab fa-facebook-f fs-5"></i>
                                    <i class="fab fa-instagram fs-5"></i>

                                </div>
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <button className='btn btn-outline-success px-5'> Get a Quote</button>

                            </div>
                        </div>
                    </div>
                </section>

                <div class="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    <a class="text-reset fw-bold nav-link" href="">© 2023 Copyright DrinkFree Advertising Media All Rights Reserved</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer

import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navi = useNavigate();

    const HomeReload = () => {
        navi("/");
        window.location.reload();
    };

    const AdvertiseReload = () => {
        navi("/Advertise");
        window.location.reload();
    };

    const DistributeReload = () => {
        navi("/Distribute");
        window.location.reload();
    };

    const HollReload = () => {
        navi("/Holl");
        window.location.reload();
    };

    const FAQReload = () => {
        navi("/FAQ");
        window.location.reload();
    };

    const ContactUsReload = () => {
        navi("/ContactUs");
        window.location.reload();
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
                <div className="container-fluid">
                    <a onClick={HomeReload} className="nav-link d-lg-none " href="#"><img className='w-75' src="https://static.wixstatic.com/media/bfcb9b_d7047ec822e74cc39759b67ea876e7d5~mv2.webp/v1/fill/w_60,h_60,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cropped-Logo_Freewater_Vert_Color-1.webp" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars-staggered"></i>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100  d-flex align-items-center justify-content-center gap-3">
                            <li className="nav-item ">
                                <a onClick={HomeReload} className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item ">
                                <a onClick={AdvertiseReload} className="nav-link" href="#">Advertise</a>
                            </li>

                            <li className="nav-item">
                                <a onClick={DistributeReload} className="nav-link" href="#">Distribute</a>
                            </li>

                            <li className="nav-item">
                                <a onClick={HomeReload} className="nav-link" href="#"><img className='w-75' src="https://static.wixstatic.com/media/bfcb9b_d7047ec822e74cc39759b67ea876e7d5~mv2.webp/v1/fill/w_60,h_60,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cropped-Logo_Freewater_Vert_Color-1.webp" alt="" /></a>
                            </li>

                            {/* <li className="nav-item">
                                <a onClick={HollReload} className="nav-link" href="#">Hall of Fame</a>
                            </li> */}

                            <li className="nav-item">
                                <a onClick={FAQReload} className="nav-link" href="#">FAQ</a>
                            </li>

                            <li className="nav-item">
                                <a onClick={ContactUsReload} className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;

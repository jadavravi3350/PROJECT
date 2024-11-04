import React from 'react'
import { Link } from 'react-router-dom'

function Distribute() {
  return (
    <div>

      <div className='d-flex justify-content-center p-4'>

        <h6 className='col-9 text-center text-lg-start'><Link to={"/"}>Home</Link> > Distribute</h6>

      </div>

      <section>
        <div className='Distributediv1 d-flex justify-content-center align-items-center'>
          <div className='col-12 col-lg-9 text-light text-center text-lg-start'>
            <h1 className='display-1 fw-bold col-12 col-lg-8'>Distribute FreeNeer</h1>
            <p className=' fs-2 col-12 col-lg-4'>Whether it's an event
              or for your business,
              we have many different options for you!</p>
          </div>

        </div>
      </section>

      <section className='d-flex justify-content-center my-5'>
        <img className='img-fluid' src="https://static.wixstatic.com/media/bfcb9b_08e32a3687144397829ca6db8e26c1b9~mv2.png/v1/crop/x_37,y_48,w_1348,h_510/fill/w_1213,h_459,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bottle_image_with_text.png" alt="" />
      </section>

      <section className='d-flex justify-content-center py-lg-5'>
        <div className='col-12 col-lg-5 border p-3'>

          <h2 className='my-5'>Distribute FreeNeer</h2>

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
              <label for="" className='fs-5'>Company name:*</label><br />
              <input className='form-control p-2 fs-5 rounded-0 border-0 ' type="text" />
            </div>

            <div>
              <label for="" className='fs-5'>Type of business:*</label><br />
              <input className='form-control p-2 fs-5 rounded-0 border-0 ' type="text" />
            </div>

            <div className='d-flex align-items-center'>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label fs-5" for="flexCheckDefault">
                Is items for an event?
              </label>
            </div>

            <div>
              <label for="" className='fs-5'>Distribution point address:*</label><br />
              <input className='form-control p-2 fs-5 rounded-0 border-0 ' type="text" />
            </div>

            <div>
              <label for="" className='fs-5'>Shipping address if it is different than the distribution point:*</label><br />
              <input className='form-control p-2 fs-5 rounded-0 border-0 ' type="text" />
            </div>

            <div>
              <label for="" className='fs-5'>Daily foot traffic:*</label><br />
              <input className='form-control p-2 fs-5 rounded-0 border-0 ' type="number" />
            </div>

            <div>
              <label for="" className='fs-5'>Age range:*</label><br />
              <input className='form-control p-2 fs-5 rounded-0 border-0 ' type="number" />
            </div>

            <div>
              <label for="" className='fs-5'>How many beverages do you want to distribute monthly?:*</label><br />
              <textarea className="form-control p-2 fs-5 rounded-0 border-0 " id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>

            <div>
              <label for="" className='fs-5'>Do you have an elevated loading dock to receive a shipment?:*</label><br />

              <div className='d-flex align-items-center'>
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label fs-5" for="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div className='d-flex align-items-center'>
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label fs-5" for="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>

            <div>
              <label for="" className='fs-5'>Why do you want to distribute FreeNeer?:*</label><br />
              <textarea className="form-control p-2 fs-5 rounded-0 border-0 " id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>

            <div className='d-flex align-items-center'>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label fs-5" for="flexCheckDefault">
              I agree to share this information with potential advertisers?
              </label>
            </div>

            <button className='btn btn-info '>Send</button>
          </form>
        </div>
      </section>

    </div>
  )
}

export default Distribute

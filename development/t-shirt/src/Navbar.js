import React, { useContext, useState } from 'react'
import { useNavigate} from 'react-router';
import { contexts } from './App';
import { Link } from 'react-router-dom';

function Navbar() {
  const navi = useNavigate();
  const { login, setlogin, name, AddCart } = useContext(contexts);
  const [count, setCount] = useState(0);

  const handlelog = () => {
    navi("/log");
  }

  const handleregi = () => {
    navi("/regi")
  }

  const handleQuantityChange = (event, index) => {
    const newValue = parseInt(event.target.value);
    const updatedCart = [...AddCart];
    updatedCart[index].val = newValue;
    updateSubtotal(updatedCart);
  };

  const updateSubtotal = (cart) => {
    const subtotal = cart.reduce((acc, item) => acc + item.val * item.price, 0);
    setCount(subtotal);
  };

  return (
    <div>

      <div className="superNav border-bottom py-2 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
              <select className="me-3 border-0 bg-light">
                <option value="en-us">EN-US</option>
              </select>
              <span className="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3"><strong>info@mysite.com</strong></span>
              <span className="me-3"><i className="fa-solid fa-phone me-1 text-warning"></i> <strong>123-456-7890</strong></span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
              <span className="me-3"><i className="fa-solid fa-truck text-muted me-1"></i><a className="text-muted" href="#">Shipping</a></span>
              <span className="me-3"><i className="fa-solid fa-file  text-muted me-2"></i><a className="text-muted" href="#">Policy</a></span>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#"><i className="fa-solid fa-shop me-2"></i> <strong>T SHOP</strong></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
            <div className="input-group">
              <span className="border-warning input-group-text bg-warning text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
              <input type="text" className="form-control border-warning" style={{ "color": "#7a7a7a" }} />
              <button className="btn btn-warning text-white">Search</button>
            </div>
          </div>
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ms-auto d-none d-lg-block">
              <div className="input-group">
                <span className="border-warning input-group-text bg-warning text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" className="form-control border-warning" style={{ "color": "#7a7a7a" }} />
                <button className="btn btn-warning text-white">Search</button>
              </div>
            </div>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link to={"/"} className="nav-link mx-2 text-uppercase active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/new"} className="nav-link mx-2 text-uppercase" href="#">New</Link>
              </li>
              <li className="nav-item">
                <Link to={"/women"} className="nav-link mx-2 text-uppercase" href="#">Women</Link>
              </li>
              <li className="nav-item">
                <Link to={"/men"} className="nav-link mx-2 text-uppercase" href="#">Men</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <a className="nav-link mx-2 text-uppercase" href="#"><i className="fa-solid fa-cart-shopping me-1" ></i> Cart <sup className='bg-danger text-light rounded-pill px-2'>{AddCart.length}</sup></a>
              </li>


              {
                (login) ? <>
                  <li className="nav-item" onClick={handlelog}>
                    <a className="nav-link mx-2 text-uppercase" href="#"><i className="fa-solid fa-right-to-bracket me-1"></i> Login</a>
                  </li>
                  <li className="nav-item" onClick={handleregi}>
                    <a className="nav-link mx-2 text-uppercase" href="#"><i className="fa-solid fa-circle-user me-1"></i> Regitration</a>
                  </li>
                </> : <>
                  <li className="nav-item" onClick={() => { setlogin(true) }}>
                    <a className="nav-link mx-2 text-uppercase" href="#"><i className="fa-solid fa-right-from-bracket me-1"></i> Logout</a>
                  </li>

                  <li className="nav-item bg-dark ">
                    <a className="nav-link mx-2 text-uppercase text-white text-center" href="#"> {name && name.first + " " + name.last}</a>
                  </li>

                </>
              }

            </ul>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {AddCart && AddCart.map((v, index) => (
            <div className='row justify-content-center' key={index}>
              <div className='col-4 text-end'>
                <img src={v.url} alt="" width={100} />
              </div>
              <div className='col-4'>
                <p>{v.name}</p>
                <p>${v.price}</p>
                <div className='mb-4'>
                  <input
                    type="number"
                    value={v.val}
                    onChange={(e) => handleQuantityChange(e, index)}
                    style={{ width: "100px", padding: "10px" }}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className='Totalmoney p-3'>
            <h2>Subtotal</h2>
            <h3>$ {count}</h3>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
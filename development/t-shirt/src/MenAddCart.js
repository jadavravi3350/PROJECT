import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { ApiMen } from './ContectApiwomen';
import { contexts } from './App';
import { Link } from 'react-router-dom';


function MenAddCart() {
  const { id } = useParams();
  const navi = useNavigate();
  const [state, setstate] = useState(ApiMen);
  const [url, seturl] = useState();
  const [name, setname] = useState();
  const [price, setprice] = useState();
  const [count, setcount] = useState(0);
  const ref1 = useRef();
  const ref2 = useRef();

  const { AddCart, setAddCart } = useContext(contexts);

  useEffect(() => {
    (ref1.current.value == 1) ? ref2.current.disabled = true : ref2.current.disabled = false

    var obj = state.filter((v) => {
      return v.id == id
    })
    seturl(obj[0].url)
    setname(obj[0].name)
    setprice(obj[0].price)

  }, [])

  const handleAddcart = (e) => {
    e.preventDefault()

    setAddCart([...AddCart, { url: url, name: name, price: price, val: count }]);

  }
  const handledec = () => {

    setcount(count - 1)

    if (ref1.current.value == 2) {
      ref2.current.disabled = true
    }

  }

  const handleinc = () => {

    setcount(count + 1)

    if (ref1.current.value == 1) {
      ref2.current.disabled = false
    }

  }
  return (
    <div>
      <div className='my-5 container'>
        <button className='btn' onClick={() => { navi("/") }}>Home </button>/
        <button className='btn' onClick={() => { navi("/men") }}>Men</button> /
        <b> I'm a product</b>

      </div>

      <div className='container'>
        <div className='row text-center border'>

          <div className=' col-12 col-md-6'>
            <img src={url} alt="" />
          </div>

          <div className=' col-12 col-md-6'>
            <h1 className='mb-4'>{name}</h1>
            <p>SKU: 0014</p>
            <p className='my-4'>$ {price}</p>
            <p>Quantity</p>
            <div className='mb-4'>
              <button ref={ref2} onClick={handledec} style={{ padding: "10px" }}> - </button>

              <input ref={ref1} type="text" value={count} onChange={(e) => { setcount(e.target.value) }} style={{ width: "100px", padding: "10px", textAlign: "center" }} />

              <button onClick={handleinc} style={{ padding: "10px" }}> + </button>
            </div>
            <div>
              <button onClick={handleAddcart} className='bg-dark text-white fs-4 w-50' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasTop">Add To Cart</button>

              <h1></h1>
              <Link to={"/pay"} className='btn bg-primary text-white fs-4 w-50'>Buy Now</Link>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default MenAddCart;

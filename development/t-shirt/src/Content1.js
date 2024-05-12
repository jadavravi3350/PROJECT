import React from 'react'
import { useNavigate } from 'react-router'

function Content1() {
 const navi = useNavigate();

  const handlewomen = ()=>
  {
    navi("/women")
  }

  const handlenew = ()=>
  {
    navi("/new")
  }

  
  const handlemen = ()=>
  {
    navi("/men")
  }
  return (
    <div>
      <div className='container text-center py-5'>
        <h1 className=' Everyone1'><b>T SHOP</b></h1>
        <p><b  className='Everyone2 px-5 fs-4'>There’s One for Everyone</b></p>
      </div>

      <div className='container-fluid'>
        <div className='row gap-3 justify-content-center'>
          <div className='col-12 col-md-3 shop-women shop-all' onClick={handlewomen}>
            <div>
              shop women
            </div>
          </div>

          <div className='col-12 col-md-5 shop-new shop-all' onClick={handlenew}>
          <div>
              shop new
            </div>
          </div>

          <div className='col-12 col-md-3 shop-men shop-all' onClick={handlemen}>
          <div>
              shop men
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Content1

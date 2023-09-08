import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='container-fluid footer'>

      <div className="inner-footer">
        <div className="text-side">
          <h6 className='fw-bold'>
            <span>121 light house ,delhi,20001</span>
            <span>Phone 123.123.123</span>
            <span  >MEDIA & PRESS</span>
            <span>CONTACT US</span>
          </h6>
        </div>
        <div className="img-sight">

          <i class="fa fa-facebook fa-4x mx-3 " ></i>
          <i class="fa fa-instagram fa-4x mx-3 " ></i>
        </div>

      </div>

    </div>
  )
}

export default Footer
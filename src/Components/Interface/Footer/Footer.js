import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='container-fluid footer'>
      <div style={{ width: "70%", margin: "auto" }} className="row text-center h5">


        <div className="col-md-3  gx-4 ">113 JANE STREET, NY, NY 10014</div>
        <div className="col-md-3  gx-4 ">PHONE 212.924.6700</div>
        <div className="col-md-3  gx-4">CONTACT US</div>
        <div className="col-md-3  gx-4">
          <i class="fa fa-facebook fa-4x mx-3 " ></i>
          <i class="fa fa-instagram fa-2x mx-3 " ></i></div>

      </div>
    </div >


  )
}

export default Footer
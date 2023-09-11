import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import './Footer.css'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-white text-center'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0 text-left '>
            <h5 className='text-uppercase'>  <span className=' border-bottom py-2 m-2 ' >My Hotel</span> </h5>

            <p className='mt-3' >
              Apart from its timeless beauty and charm, the HOTEL sets the standard of exquisite luxury with its smart in-room services, same-day laundry, ample parking space, travel desk and 24-hour security.

            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0  '>
            <h5 className='  border-bottom py-2  text-uppercase'>Quick Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <Link to="/" className='text-decoration-none  text-white' >Home</Link>

              </li>
              <li>
                <Link to="/booking" className='text-decoration-none  text-white' >Book Now</Link>
              </li>
              <li>
                <Link to="/photo" className='text-decoration-none  text-white' >Photos</Link>
              </li>
              <li>
                <Link to="/" className='text-decoration-none  text-white' >Privacy & Policies</Link>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className=' border-bottom py-2 text-uppercase mb-0'>Contact Details</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                  <i className='fa fa-location'></i>
                </a>
              </li>
              <li>
                <Link to="/location" className='text-decoration-none text-white' >
                  <i className='fa fa-map'></i> 134 Milestone, NH-1, Shamgarh, Karnal, Haryana 132001
                </Link>
              </li>
              <li>


                <a href="tel:(+91)(8059424475)p()" className='text-white text-decoration-none' > <i className='fa fa-phone'></i> +91 8059424475 </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  <i className='fa fa-envelope'></i>info@javeo-traveller.com
                </a>
              </li>
              <li>

                <a href="www.facebook.com" className='text-decoration-none text-white' > <i className='fa fa-3x m-3 fa-facebook'></i></a>
                <a className='text-decoration-none text-white' href="www.instagram.com"  ><i className='fa fa-3x m-3 fa-instagram'></i>


                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>

        <p className='text-white mx-2' >
          © 2023 Copyright: javeo-traveller, All Rights Reversed.       </p>
      </div>
    </MDBFooter>
  );
}
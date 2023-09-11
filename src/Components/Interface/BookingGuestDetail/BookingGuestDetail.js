import React from 'react'
import "./BookingGuestDetail.css"
import { Link } from 'react-router-dom'
export const BookingGuestDetail = () => {
    return (
        <div>

            <div className="rooms-next">

                <div className=" h2 text-center">
                    Guest Details
                </div>
                <div className=" h2 text-center">
                    <img src="https://thevivaan.com/images/heading.png" alt="" />
                </div>

                <p> <input type="text" name="" placeholder='First Name*' id="" /> </p>
                <p> <input type="text" name="" placeholder='Last Name*' id="" /> </p>
                <p> <input type="text" name="" placeholder='Email Address*' id="" /> </p>
                <p> <input type="number" name="" placeholder='Phone Adress*' id="" /> </p>
                <p> <input type="text" name="" placeholder='Adress*' id="" /> </p>
                <p> <input type="text" name="" placeholder='City*' id="" /> </p>
                <p> <input type="text" name="" placeholder='State*' id="" /> </p>
                <p> <input type="text" name="" placeholder='Postal Code*' id="" /> </p>

                <p className='text-center pt-3 ' >
                    <Link to="/booking/payment" > <button class="button-85" role="button">Next</button> </Link>
                </p>

            </div>

        </div>
    )
}

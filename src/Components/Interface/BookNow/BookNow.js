// BookingPage.js
import React, { useState } from 'react';
import './BookNow.css';

const BookNow = () => {
    const [noOfRooms, setNoOfRooms] = useState(1)
    const [showDate, setShowDate] = useState(false)

    return (
        <div data-aos="fade-down-left" >


            <div className="container-fluid">
                <div className="row  text-center">
                    <div className="display-4 text-center ">Guests & Rooms</div>

                    <div className="col-md-6 g-4 text-right ">
                        <select name="" id="">
                            <option value="">1 Adult</option>
                            <option value="">2 Adults</option>
                        </select> </div>
                    <div className="col-md-6 text-left  g-4">
                        <select name="" id="">
                            <option value="">0 Children</option>
                            <option value="">1 Children</option>
                        </select>
                    </div>

                    <div className="col-md-12">
                        <h3 className='text-center'>Check-in   -   Check-out</h3>

                        <div className="calander">
                            <input className='date-pic' type="date" name="" id="" />
                            <input className='date-pic' type="date" name="" id="" />
                        </div>

                    </div>

                    <div className="row  ">
                        <div className="col-md-12"><div className=" h1 text-center ">
                            no of Rooms
                        </div>

                            <select className='' name="" id="">

                                <option value="">Single Room</option>

                                <option value="">Double Room</option>

                            </select>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img width="100%" src="https://static.wixstatic.com/media/nsplsh_3d648d03915142b6a2cc00f334295a2f~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20visualsofdana.jpg" alt="" />
                        </div>

                        <div className="col-md-6">

                            <h1>Guest Information</h1>
                            <input type="text" placeholder='first name' name="firstname" id="" />
                            <input placeholder='first name' type="text" name="lastname" id="" />
                            <input placeholder='first name' type="text" name="email" id="" />
                            <input placeholder='first name' type="text" name="phone" id="" />
                            <input placeholder='first name' type="text" name="adress" id="" />

                            <input placeholder='first name' type="text" name="city" id="" />
                            <input placeholder='first name' type="text" name="state" id="" />
                            <input placeholder='first name' type="text" name="postal" id="" />

                        </div>
                    </div>


                </div>

            </div>
        </div>



    );
};

export default BookNow;

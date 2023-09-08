// BookingPage.js
import React, { useState } from 'react';
import './BookNow.css';

const BookNow = () => {
    const [noOfRooms, setNoOfRooms] = useState(1)
    const [showDate, setShowDate] = useState(false)




    return (
        <div data-aos="fade-down-left" >      {
            !showDate ?
                <div>
                    <p className=' text-center m-4 display-6  '>Rooms & Guests</p>
                    <div className="inp-box">
                        <div className=' p-2 '  >
                            <select name="" id="">
                                <option value="">
                                    1 Adult
                                </option>-
                                <option value="">
                                    2 Adults
                                </option>
                            </select>

                            <select name="" id="">
                                <option value="">
                                    0 Child
                                </option>
                                <option value="">
                                    1 Child
                                </option>
                            </select>

                        </div>
                        <p className='p-2' ><i className='fa fa-facebook'></i>Add A Rooms</p>
                    </div>
                    <div className="text-center">

                        <button class=" mb-2 button-82-pushable" role="button">
                            <span class="button-82-shadow"></span>
                            <span class="button-82-edge"></span>
                            <span class="button-82-front text" onClick={() => setShowDate(!showDate)} >
                                UPDATE GUESTS AND ROOMS
                            </span>
                        </button>

                    </div>
                </div> : null


        }
        </div>

    );
};

export default BookNow;

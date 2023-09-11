import React, { useState } from 'react'
import './BookingRoomDate.css'
import { Link } from 'react-router-dom'
export const BookingRoomDate = () => {
    const [openDate, setOpenDate] = useState(false)

    return (

        < div >

            <div className="rooms">
                <h5 className='border-bottom p-2' >
                    Book Now
                </h5>
                <p className='NoOfRooms' > <span  >No OF Rooms:-</span>
                    <select name="" id="">
                        <option value="">
                            1 Room
                        </option>
                        <option value="">
                            2 Rooms
                        </option>
                    </select></p>
                <p className='NoOfRooms' > <span  >Adults:-</span>
                    <select name="" id="">
                        <option value="">
                            1 Adult
                        </option>
                        <option value="">
                            2 Adults
                        </option>
                    </select></p>
                <p className='NoOfRooms' > <span  >Children:-</span>
                    <select name="" id="">
                        <option value="">
                            0 Children
                        </option>
                        <option value="">
                            1 Childrens
                        </option>
                    </select></p>

                <p className='text-center pt-5 ' >
                    <button class="button-85" role="button">Next</button>
                </p>

            </div>

            <div className="rooms-next">
                <h2 className='text-center border-top mt-5 pt-5 ' > Select Date </h2>
                <p className='NoOfRooms' > <span className=' mx-3 border-bottom'  >Check In :-</span>

                    <input className='m-auto bg-dark text-white  check-date-padding mt-4 ' type="date" name="" id="" />

                </p>
                <p className='NoOfRooms' > <span className=' mx-3   border-bottom'  >Check Out :-</span>

                    <input className='m-auto bg-dark text-white p check-date-padding mt-4 ' type="date" name="" id="" />

                </p>
                <p className='text-center pt-5 ' >
                    <Link to="/booking/guestdtails" > <button class="button-85" role="button">Next</button> </Link>
                </p>
            </div>

        </ div>
    )
}

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Interface/Header/Header'
import Home from '../Interface/Homes/Home'
import Footer from '../Interface/Footer/Footer'
import Photo from '../Interface/Photos/Photo'
import Location from '../Interface/Location/Location'
import History from '../Interface/History/History'
import Room from '../Interface/Rooms/Room'
import { BookingGuestDetail } from '../Interface/BookingGuestDetail/BookingGuestDetail'
import BookingPayment from '../Interface/BookingPayment/BookingPayment'
import { BookingRoomDate } from '../Interface/BookingRoomDate/BookingRoomDate'

const HotelRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/room' element={<Room />} />
                    <Route path='/photo' element={<Photo />} />
                    <Route path='/location' element={<Location />} />
                    <Route path='/history' element={<History />} />
                    <Route path='/booking/rooms&dates' element={<BookingRoomDate />} />
                    <Route path='/booking/guestdtails' element={<BookingGuestDetail />} />
                    <Route path='/booking/payment' element={<BookingPayment />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default HotelRouter
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Interface/Header/Header'
import Home from '../Interface/Homes/Home'
import Footer from '../Interface/Footer/Footer'
import Photo from '../Interface/Photos/Photo'
import Location from '../Interface/Location/Location'
import History from '../Interface/History/History'
import Room from '../Interface/Rooms/Room'
import BookNow from '../Interface/BookNow/BookNow'

const HotelRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/room' element={<Room />} />
                    <Route path='/photos' element={<Photo />} />
                    <Route path='/location' element={<Location />} />
                    <Route path='/history' element={<History />} />
                    <Route path='/booking' element={<BookNow />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default HotelRouter
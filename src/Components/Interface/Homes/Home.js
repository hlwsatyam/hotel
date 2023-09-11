import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css'

const Home = () => {
    const images = [
        "https://thevivaan.com/images/rooms/standard-room.jpg",
        "https://thevivaan.com/images/rooms/executive-room.jpg",
        "https://thevivaan.com/images/rooms/royal-suite.jpg",
        "https://thevivaan.com/images/rooms/executive-suite-room.jpg"
    ];
    return (

        <div data-aos="fade-up-right" className='container-fluid p-0'>

            <p className='home-img' >
                <img data-aos="flip-left" className='img-fluid' src="https://www.thejanenyc.com/wp-content/uploads/2015/09/the-jane-captain.jpg" alt="" srcset="" />
                <main>
                    <div className="text-center">
                        One of a Kind
                    </div>
                    <div className="text-center">
                        An epitome of Generous Hospitality
                    </div>
                    <div className="text-center my-4  ">
                        <a href="tel:(+91)(8059424475)p()" className='text-white border  p-3 shadow rounded text-decoration-none' > <i className='fa fa-phone'></i> +91 8059424475 </a>
                    </div>

                </main>
            </p>

            <div className="container-fluid">
                <div className="row img-half-text ">
                    <div className="col-md-6 g-5 ">

                        <div className="img-sec-home"></div>
                        <img className='w-100' src="https://thevivaan.com/images/home-about.jpg" alt="" />
                    </div>
                    <div className="col-md-6  border-top  g-5 p-5 text-left ">
                        <h1>Hotel In Mumbai</h1>
                        The Vivaan is one of the best hotels in Karnal with 5 star facilites. Embracing warm hospitality and absolute luxury as a core value, The Vivaan Hotel in Karnal stands tall on the Delhi-Chandigarh National Highway (NH-1).

                        With an inviting ambiance, The Vivaan is a unique mélange of contemporary architecture and a touch of traditional royal essence. Strategically set amidst a vast expanse, the hotel in Karnal is the epitome of opulence. Experience first-class services, on-site dining options, well-appointed guest rooms, and much more at The VIVAAN.

                        As the only midscale business and leisure luxury hotel on the GT Karnal Road, The Vivaan offers modern “Close to Home” accommodations with all the amenities and conveniences for a leisure or business stay. The rooms are built with modern-day comforts along with fresh and bright interiors without compromising on any factor. Along with this, we take pride in offering par-excellence services to our clients to ensure that they are always fully satisfied and always waiting to come back to our hotel.
                    </div>
                </div>
            </div>

            <div className="text-container p-5 ">
                <div data-aos="flip-right" className="inner-box">
                    <h1 className=" text-center h1 title "> The Jane Hotel </h1>
                    <div className="design text-center ">  </div>
                    <div className=" text-center "> With its prime West Village location, Landmark building, and river views, The Jane is home away from home for in-the-know travelers from all over the world. Built in 1908 as a home for sailors and lovingly restored in 2008, The Jane offers a hotel experience for every traveler.  Our 100 Standard Cabins and 20 Bunk Bed Cabins have shared bathrooms, while our 2 Captain’s Cabins have en suite bathrooms. Inspired by luxury ship and train cabins, The Jane uses thoughtful design to pack maximum convenience into minimal space. </div>

                </div>
            </div>

            <Carousel autoPlay={true} useKeyboardArrows={true}>
                {images.map((URL, index) => (
                    <div className="slide">
                        <img alt="sample_file" src={URL} key={index} />
                    </div>
                ))}
            </Carousel>


        </div>
    )
}

export default Home
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css'
const Home = () => {
    const images = [
        "https://cdn1.goibibo.com/voy_ing/t_g/715c250c769411eaac720242ac110002.jpg",
        "https://cdn1.goibibo.com/voy_ing/t_fs/715c250c769411eaac720242ac110002.jpg",
        "https://cdn1.goibibo.com/voy_mmt/t_g/htl-imgs/201403011036219849-c2d35fc6d35411e7b24e0a692cfeef8a.jpg",
    ];
    return (
        <div data-aos="fade-up-right" className='container-fluid p-0'>

            <img data-aos="flip-left" className='img-fluid' src="https://www.thejanenyc.com/wp-content/uploads/2015/09/the-jane-captain.jpg" alt="" srcset="" />

            <div className="text-container p-5 ">
                <div data-aos="flip-right" className="inner-box">
                    <h1 className=" text-center h1 title "> The Jane Hotel </h1>
                    <div className="design text-center ">  </div>
                    <div className=" text-center "> With its prime West Village location, Landmark building, and river views, The Jane is home away from home for in-the-know travelers from all over the world. Built in 1908 as a home for sailors and lovingly restored in 2008, The Jane offers a hotel experience for every traveler.  Our 100 Standard Cabins and 20 Bunk Bed Cabins have shared bathrooms, while our 2 Captain’s Cabins have en suite bathrooms. Inspired by luxury ship and train cabins, The Jane uses thoughtful design to pack maximum convenience into minimal space. </div>

                </div>
            </div>

            <Carousel autoPlay={true}  useKeyboardArrows={true}>
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
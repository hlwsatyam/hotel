import React from 'react'
import './Location.css'
const Location = () => {
    return (
        <div data-aos="zoom-out-up">

            <div className="location-up">

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                    width="100%"

                    style={{ border: "0", height: "110vh" }}
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>

            </div>
            <div data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0" className="location-down p-5 bc-warning m-5 border shadow ">
                <div className="text-center display-1 fw-bold ">Location</div>
                The Jane is one of the only hotels located in the quintessentially historic and charming West Village, at 113 Jane Street at the Hudson River. We are adjacent to the Meatpacking District, the High Line, and The Whitney Museum and walking distance to Chelsea, Soho, and Union Square. A quick stroll through our neighborhood will reveal its storied history, countless restaurants, bars, nightclubs, and boutiques. Guests can live as the locals do, enjoying any outdoor activity from a jog or walk by the river to a bike ride to sunbathing on the piers. We are close to the A, C, and E trains at 14th Street and the 14th Street bus.

            </div>



        </div>
    )
}

export default Location
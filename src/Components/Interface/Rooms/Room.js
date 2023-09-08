import React from 'react'
import style from './Room.module.css'
const Room = () => {
    return (
        <div  data-aos="flip-down" className={style.room}>

            <img style={{ width: "100%" }} src="https://www.thejanenyc.com/wp-content/uploads/2015/08/rooms-page.jpg" alt="" srcset="" />

            <div  data-aos="zoom-in-up" className={style.threecard}>
                <box>

                    <h5>Captain`s Cabin</h5>

                </box>
                <box>

                    <h5>Captain`s Cabin</h5>

                </box>
                <box>

                    <h5>Captain`s Cabin</h5>

                </box>
               
            </div>

        </div>
    )
}

export default Room
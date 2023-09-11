import React from 'react'
import './BookingPayment.css'
function BookingPayment() {
    return (
        <div>
            <div className="container-md p-4 mt-5 mb-5 ">
                <div className="row">
                    <div className="display-6">
                        Payment Method
                    </div>
                    <div className="col-md-6 g-3 ">
                        <p>
                            <img src="https://res.cloudinary.com/simplotel/image/upload/q_80/w_50,c_fit/v1498116082/visa_yiokun.gif" alt="" />
                            <img src="https://res.cloudinary.com/simplotel/image/upload/q_80/w_50,c_fit/v1498116081/mastercard_pqr6jg.png" alt="" />
                            <img src="https://res.cloudinary.com/simplotel/image/upload/q_80/w_50,c_fit/v1498116081/maestro_loe2vl.png" alt="" />
                            <img src="https://res.cloudinary.com/simplotel/image/upload/q_80/w_50,c_fit/v1498116081/credit_card_amex_vlkyal.png" alt="" />
                            <img src="https://res.cloudinary.com/simplotel/image/upload/q_80/w_50,c_fit/v1498116081/netbanking_efiay2.png" alt="" />
                        </p>
                        <p>By completing this reservation you are accepting our <a href="">Terms & Conditions</a></p>
                        <input type="text" placeholder='Name of Card' />
                        <input type="text" className='mt-3' placeholder='Card No' />
                        <input className='mt-3' type="text" placeholder='MM/YY' />
                        <div className='mt-3' >
                            <span className="btn btn-primary  ">
                                Pay Now
                            </span>

                            <span className="mx-2 btn btn-primary  ">
                                Pay After Ariavle
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6 border-top g-3 ">
                        <div className="display-6">
                            Your Reservation
                        </div>

                        <p>
                            <span>
                                <i className='fa fa-calendar'></i> 1 night  </span>
                            <span>

                                <i className='fa fa-calendar'></i>
                                1 Adult
                            </span>

                        </p>


                        <p className='border-bottom mt-3' > Subtotal <span className='float-right' >2145rs</span>  </p>
                        <div className='border-bottom border-top mt-1 mb-1' >
                            <p className='mt-2' > Tax <span className='float-right' >55rs</span>  </p>
                            <p className=' mt-2' > Total <span className='float-right' >2200rs</span>  </p>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default BookingPayment
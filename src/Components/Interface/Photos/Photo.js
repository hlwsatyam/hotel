import Carousel from 'react-bootstrap/Carousel';
import './Photo.css'
function Photo() {
    return (
        <><Carousel data-aos="flip-left" data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.thejanenyc.com/wp-content/uploads/2015/09/the-jane-captain.jpg"
                    alt="First slide" />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.thejanenyc.com/wp-content/uploads/2015/09/the-jane-captain.jpg"
                    alt="Second slide" />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.thejanenyc.com/wp-content/uploads/2015/09/the-jane-captain.jpg"
                    alt="Third slide" />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 g-5 photos-rounded  ">
                        <div className="img">
                            <img className='img-fluid' src="https://thevivaan.com/images/meetings-and-conference.jpg
                    " alt="" />
                        </div>

                    </div>
                    <div className="col-md-6 p-5 g-5 text-left ">

                        <h1 className='border-bottom text-uppercase' >Board Room</h1>
                        Boasting a seating capacity of 20 pax the exclusive Board Room at the Abc Luxury Hotel is a perfect place to hold intimate affairs like corporate meetings and conferences in Karnal near Delhi on Delhi-Chandigarh Highway.
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-6 p-5  g-5  text-left ">

                        <h2 className='border-bottom text-uppercase' >Annual Function</h2>
                        Amaanat - A well-appointed and spacious hall at the luxury hotel & resort in Karnal is the most suitable choice for organizing business meetings, corporate events, etc. in a magnificent setup.
                    </div>
                    <div className="col-md-6 g-5 photos-rounded  ">
                        <div className="img">
                            <img className='img-fluid' src="https://thevivaan.com/images/gbr-meetings.jpg
                    " alt="" />
                        </div>

                    </div>
                </div>


            </div>


        </>


    );
}

export default Photo;
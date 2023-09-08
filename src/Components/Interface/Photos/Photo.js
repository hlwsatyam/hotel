import Carousel from 'react-bootstrap/Carousel';

function Photo() {
    return (
        <Carousel  data-aos="flip-left" data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.thejanenyc.com/wp-content/uploads/2015/09/the-jane-captain.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.thejanenyc.com/wp-content/uploads/2015/09/the-jane-captain.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.thejanenyc.com/wp-content/uploads/2015/09/the-jane-captain.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Photo;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import "./Header.css"
function Header() {
    return (
        <div div className='header' >

            <Navbar  >
                <Container>
                    <Navbar.Brand href="#home"> <Link className='text-decoration-none' to="/" >My Hotel</Link></Navbar.Brand>

                    <Nav className="ms-auto">
                        <Nav.Link href="#home"> <Link className='text-decoration-none' to="/booking" >Book Now</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar style={{ "overflow-y": "scroll" }} bg='dark' data-bs-theme="light">
                <Nav className="m-auto">

                    <Nav.Link className='px-5' >
                        <Link to="/room" className='text-decoration-none' >Room</Link>
                    </Nav.Link>

                    <Nav.Link className='px-5' > <Link className='text-decoration-none' to="/history" >History</Link></Nav.Link>

                    <Nav.Link className='px-5' > <Link className='text-decoration-none' to="/photos" >Photos</Link></Nav.Link>

                    <Nav.Link className='px-5' > <Link className='text-decoration-none' to="/location" >Location</Link></Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Header.css"
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className=" position-sticky top-0 indx-sticky bg-body-tertiary  w-100  ">
                    <Container fluid>
                        <Navbar.Brand href="#">My Hotel</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <Link className='text-decoration-none anchor-head ' to="/" >My Hotel</Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='header-slide' >
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1"> <Link className='text-decoration-none anchor-head ' to="/room" >Room</Link></Nav.Link>
                                    <Nav.Link href="#action2"> <Link className='text-decoration-none anchor-head ' to="/photo" >photos</Link></Nav.Link>
                                    <Nav.Link href="#action2"> <Link className='text-decoration-none anchor-head ' to="/history" >History</Link></Nav.Link>
                                    <Nav.Link href="#action2"> <Link className='text-decoration-none anchor-head p-2 bg-white hover border text-primary shadow circle ' to="/booking/rooms&dates"  >Book Now</Link></Nav.Link>

                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Header;
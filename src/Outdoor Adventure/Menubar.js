import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './styel.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Button } from 'react-bootstrap';
import img from './ImagesHome/white-logo-150x42.png'

const Menubar = () => {
  return (
<>
<Navbar expand="lg">
      <Container>
        <Navbar.Brand href='#'><img src={img} alt="img"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className='nav'>
            <Nav.Link  aria-current="page" className='bar'> <Link to="/Home">Home </Link></Nav.Link>
            <Nav.Link ><Link to="/About">About</Link></Nav.Link>
            <Nav.Link ><Link to="/Services">Services</Link></Nav.Link>
            <Nav.Link ><Link to="/Project">Project</Link></Nav.Link>
            <Nav.Link ><Link to="/Contact">Contact</Link></Nav.Link>
            <button className='btn'>Take Action</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




      <Outlet/>
    </>
  )
}

export default Menubar

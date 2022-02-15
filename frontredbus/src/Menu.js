import React from "react";
import {Navbar, Nav,NavDropdown} from "react-bootstrap";
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';

const Menu=()=>{
    return(
        <>
        <Navbar bg="danger" variant="info">
          <div className="container">
            <Navbar.Brand href="/home">
              <img
                  src="../pictures/redbus_logo.png"
                  width="70"
                  height="60"
                  className="d-inline-block align-top"
                  alt="Redbus logo"
                />
            </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#bustickets">Bus Tickets</Nav.Link>
                      <Nav.Link href="#rydenew">RydeNew</Nav.Link>
                      <Nav.Link href="#redram">redRam</Nav.Link>
                      <Nav.Link href="#rpool">rPool</Nav.Link>
                    </Nav>
                    <Nav.Link  href="#pricing">help</Nav.Link>
                      <NavDropdown  title="Manage Booking" id="collasible-nav-help">
                        <NavDropdown.Item href="#action/3.1">Bus Tickets</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Cancel</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Change Travel Date</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Show My Ticket</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.5">Emails/SMS</NavDropdown.Item>
                        </NavDropdown>
                        <PermIdentitySharpIcon/><NavDropdown  title="" id="collasible-nav-help">
                        <NavDropdown.Item eventKey heef="#action/3.1">SignIn/SignUp</NavDropdown.Item>
                      </NavDropdown>
                </Navbar.Collapse>
                <Navbar className=" d-flex flex-row-reverse ">
                  <button 
                    className="btn btn-outline-dark fw-bold text-white me-2"
                      onClick={()=>{
                        localStorage.removeItem("user")
                        window.location.assign("/")
                        }}>
                        Logout
                  </button>
                 
                  <Nav.Link className="btn btn-outline-dark fw-bold text-white me-2" href="/bus">Buses Available</Nav.Link>
                  <Nav.Link className="btn btn-outline-dark fw-bold text-white me-2" href="/home">Home</Nav.Link>
                </Navbar>
          </div>
          
      </Navbar>
      </>
    );
}
export default Menu;


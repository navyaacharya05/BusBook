import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as ReactBootStrap from "react-bootstrap";
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';

export const Navbar=()=>{
    return(
        <>
          <div className='App'>
         
           {/*for adding menu bar Navbar.js*/}
             <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="warning" variant="info">
               <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                   <ReactBootStrap.Nav className="me-auto">
                     <ReactBootStrap.Nav.Link href="#bustickets">Bus Tickets</ReactBootStrap.Nav.Link>
                     <ReactBootStrap.Nav.Link href="#rydenew">RydeNew</ReactBootStrap.Nav.Link>
                     <ReactBootStrap.Nav.Link href="#redram">redRam</ReactBootStrap.Nav.Link>
                     <ReactBootStrap.Nav.Link href="#rpool">rPool</ReactBootStrap.Nav.Link>
                   </ReactBootStrap.Nav>
                   {/*added drowpdown in menu bar */}
                   <ReactBootStrap.Nav.Link  href="#pricing">help</ReactBootStrap.Nav.Link>
                   <ReactBootStrap.NavDropdown  title="Manage Booking" id="collasible-nav-help">
                     <ReactBootStrap.NavDropdown.Item href="#action/3.1">Bus Tickets</ReactBootStrap.NavDropdown.Item>
                     <ReactBootStrap.NavDropdown.Item href="#action/3.2">Cancel</ReactBootStrap.NavDropdown.Item>
                     <ReactBootStrap.NavDropdown.Item href="#action/3.3">Change Travel Date</ReactBootStrap.NavDropdown.Item>
                     <ReactBootStrap.NavDropdown.Item href="#action/3.4">Show My Ticket</ReactBootStrap.NavDropdown.Item>
                     <ReactBootStrap.NavDropdown.Item href="#action/3.5">Emails/SMS</ReactBootStrap.NavDropdown.Item>
                   </ReactBootStrap.NavDropdown>
                  
                   {/*Added dropdown with icon */}
                   <PermIdentitySharpIcon/><ReactBootStrap.NavDropdown  title="" id="collasible-nav-help">
                     <ReactBootStrap.NavDropdown.Item href="#action/3.1">SignIn/SignUp</ReactBootStrap.NavDropdown.Item>
                   </ReactBootStrap.NavDropdown>
               </ReactBootStrap.Navbar.Collapse>
             </ReactBootStrap.Navbar>
           </div>
        
       </>
    );
}



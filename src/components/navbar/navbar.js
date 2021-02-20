import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import './navbar.css'

export default function NavBar() {
    return (
        <div >
            <Navbar style={{ background:"rgb(255,255,255, 0.85)"}} fixed="top" t expand="md"  variant="light" className="animate-navbar nav-theme justify-content-center">
                <div>
                        <Navbar.Brand href="#home">
                            <img className="logo" src="https://res.cloudinary.com/dnkxmjpxy/image/upload/v1613789506/Amira_s_Kitchen_cquefo.gif" alt="logo" />
                            <Navbar.Toggle className="ml-5"aria-controls="responsive-navbar-nav" />   
                            <Navbar.Collapse  id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link href="#features">About me</Nav.Link>
                                <Nav.Link href="#Recipes">Recipes</Nav.Link>
                                <Nav.Link href="#Explore">Explore</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                       </Navbar.Brand>
                </div>
                <div>
                  
                </div>
            </Navbar>
        </div>
    )
}

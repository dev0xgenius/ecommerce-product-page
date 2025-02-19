import React from 'react'
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Profile from '../Profile/Profile.tsx'

export default function Header() {
  return (
    <header className="border-bottom border-secondary">
      <Navbar expand="md">
        <Container fluid className="gap-3 p-4 py-2">
          <Navbar.Toggle className="border-0 shadow-none p-0" aria-controls="menuNavbar" />
          <Row className="align-items-md-start flex-md-row-reverse gap-md-4">
            <Navbar.Offcanvas placement="start" className="p-4 w-75 col p-md-0" aria-labelledby="menuNavbar" id="menuNavbar">
              <Navbar.Toggle className="ps-3" aria-controls="menuNavbar">
                <img src="src/assets/images/icon-close.svg" alt="close button" />
              </Navbar.Toggle>
              <Offcanvas.Body>
                <Nav>
                  {["Collections", "Men", "Women", "About", "Contact"]
                    .map((element, index) =><Nav.Link key={index} href="#">{element}</Nav.Link>)}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Brand className="fw-bolder col-md-auto m-0">sneakers</Navbar.Brand>
          </Row>
          <Profile />
        </Container>
      </Navbar>
    </header>
  )
}
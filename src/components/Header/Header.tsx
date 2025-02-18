import React from 'react'
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'

const Header = () => {
  return (
    <header className="border-bottom border-secondary">
      <Navbar expand="md">
        <Container fluid className="gap-3 p-4 py-2">
          <Navbar.Toggle className="border-0 shadow-none p-0" aria-controls="menuNavbar" />
          <Row className="align-items-md-start flex-md-row-reverse gap-md-4">
            <Navbar.Offcanvas placement="start" className="p-4 w-75 col p-md-0" 
              aria-labelledby="menuNavbar" id="menuNavbar"
            >
              <Navbar.Toggle className="ps-3" aria-controls="menuNavbar">
                <img src="src/assets/images/icon-close.svg" alt="close button" />
              </Navbar.Toggle>
              <Offcanvas.Body>
                <Nav>
                  {["Collections", "Men", "Women", "About", "Contact"]
                    .map(element =><Nav.Link href="#">{element}</Nav.Link>)}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Brand className="fw-bolder col-md-auto m-0">sneakers</Navbar.Brand>
          </Row>
          <Row className="profile-section align-items-center gap-3 m-auto me-1">
            <button type="button" className="bg-transparent border-0 col" data-bs-target="#cartCard"
              data-bs-toggle="collapse" aria-label="Toggle Cart Info" aria-controls="cartCard" 
              aria-expanded="false"
            >
              <img src="src/assets/images/icon-cart.svg" width="24px" alt="cart icon" />
            </button>
            <a className="avatar col" href="#" role="button" data-bs-target="#cartCard" data-bs-toggle="collapse"
              aria-label="Toggle cart info" aria-controls="cartCard" aria-expanded="false"
            >
              <div className="container-fluid">
                <img src="src/assets/images/image-avatar.png" width="32px" alt="user avatar" />
              </div>
            </a>
            <div className="collapse position-absolute w-100 z-3" id="cartCard">
                <div className="container-fluid p-2 h-100">
                  <div className="card shadow-lg rounded-4 border-0">
                    <h6 className="card-header bg-transparent p-4">Cart</h6>
                    <div className="card-body d-flex justify-content-center text-center">
                      <p className="card-text fw-bolder align-self-center text-secondary">Your cart is empty.</p>
                    </div>
                  </div>
                </div>
              </div>
          </Row>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
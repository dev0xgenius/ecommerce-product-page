import React from 'react'
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Profile from '../Profile/Profile.tsx'
import { useEffect, useState } from 'react'

import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={`border-bottom border-1 border-secondary ${styles.header}`}>
      <Navbar expand="md">
        <Container fluid="sm" className="gap-3 p-4 py-2">
          <Navbar.Toggle className="border-0 shadow-none p-0" aria-controls="menuNavbar" />
          <Row className="align-items-md-start flex-md-row-reverse gap-md-4">
            <Navbar.Offcanvas placement="start" className="p-4 w-75 col p-md-0" aria-labelledby="menuNavbar" id="menuNavbar">
              <Navbar.Toggle className="ps-3" aria-controls="menuNavbar">
                <img src="src/assets/images/icon-close.svg" alt="close button" />
              </Navbar.Toggle>
              <Offcanvas.Body className="mt-md-1">
                <Nav className="pb-lg-2 position-relative">
                  {["Collections", "Men", "Women", "About", "Contact"]
                  .map((element, index) =>
                    <Nav.Link key={index} className={`${styles.navLink}`} href="#">
                      {element}
                    </Nav.Link>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Brand className="fw-bolder col-md-auto m-0 display-1">sneakers</Navbar.Brand>
          </Row>
          <Profile />
        </Container>
      </Navbar>
    </header>
  )
}

function addHoverEffect (linkActive: boolean): any {
  return linkActive ? styles.active : null;
}
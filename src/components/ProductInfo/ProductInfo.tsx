import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Counter from '../Counter/Counter.tsx'
import { useState, useContext } from 'react'
import { CartContext } from '../App.tsx'


export default function ProductInfo() {
  const { numberOfProducts } = useContext(CartContext);
  const [itemsInCart, setItemsInCart] = useState(numberOfProducts);
  
  return (
    <Container fluid="sm" className="content p-4">
      <Row className="flex-column gap-2">
        <span className="pretext">Sneaker Company</span>
        <h1 className="fw-bolder display-3">Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion. Featuring a
          durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
      </Row>
      <Container fluid className="d-flex flex-column gap-4 mt-2">
        <Row className="justify-content-between align-items-center flex-lg-column align-items-lg-start">
          <Col xs={5} className="d-flex align-items-center gap-2">
            <span className="h1 fw-bolder">$125.00</span>
            <span className="badge bg-black h-auto">50%</span>
          </Col>
          <Col xs={5} as="span"
            className="text-decoration-line-through text-secondary fw-bolder text-end text-lg-start"
          >
            $250.00
          </Col>
        </Row>
        <Row className="gap-2">
          <Counter count={itemsInCart} onCount={() => {}}/>
          <Col as="button" 
            className="btn btn-primary border-0 fw-bolder p-3 shadow-lg rounded-lg"
            onClick={() => {}}
          >
            <Container fluid>
              <span><img src="src/assets/images/icon-cart.svg" width="16px" alt="cart image" /></span>
              <span className="ms-2">Add to cart</span>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
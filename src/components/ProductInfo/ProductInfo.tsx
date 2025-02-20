import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Counter from '../Counter/Counter.tsx'

export default function ProductInfo() {
  return (
    <Container fluid="sm" className="content p-4">
      <div className="text row flex-column gap-2">
        <span className="pretext">Sneaker Company</span>
        <h1 className="fw-bolder display-3">Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion. Featuring a
          durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
      </div>
      <div className="container-fluid row gap-4 mt-2">
        <div className="price row justify-content-between align-items-center flex-lg-column align-items-lg-start">
          <div className="col-5 d-flex align-items-center gap-2">
            <span className="h1 fw-bolder">$125.00</span>
            <span className="badge bg-black h-auto">50%</span>
          </div>
          <span className="col-5 text-decoration-line-through text-secondary fw-bolder text-end text-lg-start">$250.00</span>
        </div>
        <div className="row gap-2">
          <Counter />
          <Button className="col border-0 fw-bolder p-3 shadow-lg rounded-lg">
            <Container fluid>
              <span className="align-top">
                <img src="src/assets/images/icon-cart.svg" width="16px" alt="cart image" />
              </span>
              <span className="ms-2">Add to cart</span>
            </Container>
          </Button>
        </div>
      </div>
    </Container>
  )
}
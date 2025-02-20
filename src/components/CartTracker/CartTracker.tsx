import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './cartTracker.module.scss'

interface Props {
  items: number,
};

export default function CartTracker({ items }:Props) {
  return (
    <Container fluid className="p-2 h-100">
      <Card className={`shadow-lg rounded-4 border-0 ${styles.tracker}`}>
        <Card.Header className="h6 fw-bold bg-transparent p-4">Cart</Card.Header>
        <Card.Body className="d-flex justify-content-center text-center flex-column h-auto">
          {
           (items > 0) ? 
          <>
            <Row xs={3} className="align-items-center justify-content-between gap-0">
              <span className="border border-danger col-3">
                <img src="src/assets/images/image-product-1-thumbnail.jpg" 
                  width='100%' className='rounded-2'
                />
              </span>
              <div className="border border-danger col-auto d-flex flex-column">
                <span>Fall Limited Edition Sneakers</span>
                <span>$125.00 x {items} <b>${items * 125.00}</b></span>
              </div>
              <span className="border border-danger col-1">
                <img src="src/assets/images/icon-delete.svg" />
              </span>
            </Row> 
            <Button className="p-3">Checkout</Button>
          </>
              :
            <Card.Text className="card-text fw-bolder align-self-center text-secondary">
              Your cart is empty.
            </Card.Text>
          }
        </Card.Body>
      </Card>
    </Container>
  )
}
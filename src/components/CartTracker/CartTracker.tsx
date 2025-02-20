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
  const Cart = () => {
    return (
      <>
        <Row xs={3} className="align-items-center justify-content-between gap-0">
          <Col xs={2} as="span" className="col-2">
            <img src="src/assets/images/image-product-1-thumbnail.jpg" 
              width='100%' className='rounded-2'
            />
          </Col>
          <Col xs={8} className="p-2 d-flex flex-column">
            <span>Fall Limited Edition Sneakers</span>
            <span>$125.00 x {items} <b>${items * 125.00}</b></span>
          </Col>
          <Col xs={1} as="span">
            <img src="src/assets/images/icon-delete.svg" />
          </Col>
        </Row> 
        <Button className="p-3">Checkout</Button>
      </>
    );
  }
  
  return (
    <Container fluid className="p-2 h-100">
      <Card className={`shadow-lg rounded-4 border-0 ${styles.tracker}`}>
        <Card.Header className="h6 fw-bold bg-transparent p-4">Cart</Card.Header>
        <Card.Body className="d-flex flex-column justify-content-center text-center gap-2">
          {
            (items > 0) ? <Cart /> :
            <Card.Text className="card-text fw-bolder justify-self-center text-secondary">
              Your cart is empty.
            </Card.Text>
          }
        </Card.Body>
      </Card>
    </Container>
  )
}
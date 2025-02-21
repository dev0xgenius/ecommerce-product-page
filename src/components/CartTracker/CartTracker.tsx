import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface Props {
  items: double,
};


export default function CartTracker({ items }:Props) {
  const Cart = () => {
    return (
      <>
        <Row xs={3} className="align-items-center justify-content-between gap-0">
          <Col xs={2} as="span">
            <img src="src/assets/images/image-product-1-thumbnail.jpg" 
              width='100%' className='rounded-2'
            />
          </Col>
          <Col xs={8} className="p-2 d-flex flex-column align-items-start">
            <span className="h6 fw-normal">Fall Limited Edition Sneakers</span>
            <span>$125.00 x {items} <b>${125.00 * items}.00</b></span>
          </Col>
          <Col xs={1} as="span">
            <img src="src/assets/images/icon-delete.svg" />
          </Col>
        </Row> 
        <Button className="p-3 fw-bold rounded-2">Checkout</Button>
      </>
    );
  }
  
  return (
    <Container fluid className="p-2 h-100">
      <Card className={`shadow-lg rounded-4 border-0`}>
        <Card.Header className="h6 fw-bold bg-transparent p-4">Cart</Card.Header>
        <Card.Body className="d-flex flex-column justify-content-center text-center gap-3 pt-4"
        >
          {
            (items > 0) ? <Cart /> :
            <Card.Text className="fw-bolder d-flex text-secondary" style={{
              minHeight: "100px", height: "100%"
            }}>
              <span className="align-self-center w-100 text-center">Your cart is empty.</span>
            </Card.Text>
          }
        </Card.Body>
      </Card>
    </Container>
  )
}
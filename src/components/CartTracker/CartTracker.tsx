import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { CartContext } from "../App.tsx"
import { useContext } from 'react'
import Cart from './Cart.tsx'

export default function CartTracker() {
  const { numberOfProducts } = useContext(CartContext);
  
  return (
    <Container fluid className="p-2 h-100">
      <Card className={`shadow-lg rounded-4 border-0`}>
        <Card.Header className="h6 fw-bold bg-transparent p-4">Cart</Card.Header>
        <Card.Body className="d-flex flex-column justify-content-center text-center gap-3 pt-4"
        >
          {
            (numberOfProducts > 0) ? <Cart items={numberOfProducts} /> :
            <Card.Text 
              className="fw-bolder d-flex text-secondary" 
              style={{
                minHeight: "100px", 
                height: "100%"
              }}
            >
              <span className="align-self-center w-100 text-center">Your cart is empty.</span>
            </Card.Text>
          }
        </Card.Body>
      </Card>
    </Container>
  )
}
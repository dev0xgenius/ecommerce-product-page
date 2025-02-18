import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import styles from './cartTracker.module.scss'

export default function CartTracker() {
  return (
    <Container fluid className="p-2 h-100">
      <Card className={`shadow-lg rounded-4 border-0 ${styles.tracker}`}>
        <Card.Header className="h6 fw-bold bg-transparent p-4">Cart</Card.Header>
        <Card.Body className="d-flex justify-content-center text-center">
          <p className="card-text fw-bolder align-self-center text-secondary">
            Your cart is empty.
          </p>
        </Card.Body>
      </Card>
    </Container>
  )
}
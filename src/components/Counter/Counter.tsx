import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function Counter() {
  return (
    <div className="counter col-12 col-sm-4">
      <Container fluid>
        <Button variant="none">
          <img src="src/assets/images/icon-minus.svg" alt="minus symbol" />
        </Button>
        <input type="number" min="0" value="0" />
        <Button variant="none">
          <img src="src/assets/images/icon-plus.svg" alt="plus symbol" />
        </Button>   
      </Container>
    </div>
  )
}
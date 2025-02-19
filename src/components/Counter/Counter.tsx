import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import styles from './counter.module.scss'

export default function Counter() {
  return (
    <div className={`col-12 col-sm-4 ${styles.counter} p-3 bg-light`}>
      <Container fluid className="d-flex align-items-center justify-content-between">
        <Button variant="none">
          <img src="src/assets/images/icon-minus.svg" alt="minus symbol" />
        </Button>
        <input type="number" min="0" value="0" 
          className="d-inline-block w-100 text-center fw-bolder border-0 bg-transparent outline-none" 
        />
        <Button variant="none">
          <img src="src/assets/images/icon-plus.svg" alt="plus symbol" />
        </Button>   
      </Container>
    </div>
  )
}
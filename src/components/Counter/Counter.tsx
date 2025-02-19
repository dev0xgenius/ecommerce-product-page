import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

import styles from './counter.module.scss'
  
export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className={`col-12 col-sm-4 ${styles.counter} p-3 bg-light`}>
      <Container fluid className="d-flex align-items-center justify-content-between">
        <Button variant="none" onClick={() => (count != 0) && setCount(c => c - 1)}>
          <img src="src/assets/images/icon-minus.svg" alt="minus symbol" />
        </Button>
        <input type="number" min={0} value={count} onChange={() => {}}
          className="d-inline-block w-100 text-center fw-bolder border-0 bg-transparent" 
        />
        <Button variant="none" onClick={() => setCount(c => c + 1)}>
          <img src="src/assets/images/icon-plus.svg" alt="plus symbol" />
        </Button>   
      </Container>
    </div>
  )
}
import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { Counter as C, CountDirection } from './types.ts'
import styles from './counter.module.scss'

export default function Counter(props: C) {
  const count = (countDirection: CountDirection) => {
    const updatedCount = props.value + (countDirection);
    props.onCount(updatedCount);
  }
  
  const handleInputChange = (evt: React.FormChange) => props.onCount(evt.target.value);
  
  return (
    <div className={`col-12 col-sm-4 ${styles.counter} p-3 bg-light`}>
      <Container fluid className="d-flex align-items-center justify-content-between">
        <Button variant="none" onClick={() => count(CountDirection.down)}>
          <img src="src/assets/images/icon-minus.svg" alt="minus symbol" />
        </Button>
        <input type="number" min={0} value={props.value} onChange={handleInputChange}
          className="d-inline-block w-100 text-center fw-bolder border-0 bg-transparent" 
        />
        <Button variant="none" onClick={() => count(CountDirection.up)}>
          <img src="src/assets/images/icon-plus.svg" alt="plus symbol" />
        </Button>   
      </Container>
    </div>
  )
}
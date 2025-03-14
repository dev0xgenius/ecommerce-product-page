import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Counter as C, CountDirection } from './types.ts'
import styles from './counter.module.scss'

import plusIconSvg from '../../assets/images/icon-plus.svg'; 
import minusIconSvg from '../../assets/images/icon-minus.svg';

export default function Counter(props: C) {
  const { UP, DOWN } = CountDirection;
  const count = (countDirection: CountDirection) => {
    let currentCountValue = props.value;
    let updatedCount: number | undefined = undefined;
    
    updatedCount = currentCountValue + (countDirection);
    if (updatedCount >= 0) props.onCount(updatedCount);
  }
  
  const handleInputChange = (evt: React.FormEvent) => {
    let input = evt.target;
    if ("value" in input) props.onCount(Number(input['value']));
  };
  
  return (
    <div className={`col-12 col-sm-4 ${styles.counter} p-3 bg-light`}>
      <Container fluid className="d-flex align-items-center justify-content-between">
        <Button variant="none" onClick={() => count(DOWN)}>
          <img src={minusIconSvg} alt="minus symbol" />
        </Button>
        <input type="number" min={0} value={props.value} onChange={handleInputChange}
          className="d-inline-block w-100 text-center fw-bolder border-0 bg-transparent" 
        />
        <Button variant="none" onClick={() => count(UP)}>
          <img src={plusIconSvg} alt="plus symbol" />
        </Button>   
      </Container>
    </div>
  )
}
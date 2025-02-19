import React from 'react'

export default function Counter() {
  return (
    <div className="counter col-12 col-sm-4">
      <Container fluid>
        <button type="button" data-bs-action="minus">
          <img src="src/assets/images/icon-minus.svg" alt="minus symbol" />
        </button>
        <input type="number" min="0" value="0" />
        <button type="button" data-bs-action="add">
          <img src="src/assets/images/icon-plus.svg" alt="plus symbol" />
        </button>   
      </Container>
    </div>
  )
}